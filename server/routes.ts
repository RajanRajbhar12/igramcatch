import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fetch from 'node-fetch';
import { waitlistSchema, instagramUrlSchema } from '@shared/schema';
import { z } from 'zod';

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API endpoint
  app.post('/api/waitlist', async (req, res) => {
    try {
      const validatedData = waitlistSchema.parse(req.body);
      const subscriber = await storage.addSubscriber(validatedData);
      res.status(201).json({ success: true, subscriber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        console.error('Error adding to waitlist:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to join waitlist' 
        });
      }
    }
  });

  // Instagram content fetch API
  app.post('/api/instagram/fetch', async (req, res) => {
    try {
      const { url } = instagramUrlSchema.parse(req.body);
      
      // This would be replaced with actual Instagram API integration 
      // or a scraping service in a production environment
      
      // For demo/development purposes, return mock data based on URL
      if (url.includes('instagram.com')) {
        // Generate a random ID based on URL
        const id = Buffer.from(url).toString('base64').substring(0, 12);
        const isVideo = url.includes('reel') || Math.random() > 0.5;
        
        // Simulate a short delay for API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const contentData = {
          id,
          type: isVideo ? 'video' : 'photo',
          thumbnail: isVideo 
            ? `https://picsum.photos/seed/${id}/400/400` // Random image for video thumbnail
            : `https://picsum.photos/seed/${id}/800/800`, // Random image for photo
          caption: `Instagram ${isVideo ? 'video' : 'photo'} #instasave #download`,
          downloadUrl: isVideo 
            ? `https://picsum.photos/seed/${id}/800/800` // In a real app, this would be the actual video URL
            : `https://picsum.photos/seed/${id}/1200/1200` // In a real app, this would be the high-res image URL
        };
        
        res.json(contentData);
      } else {
        throw new Error('Invalid Instagram URL');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid URL', 
          errors: error.errors 
        });
      } else {
        console.error('Error fetching Instagram content:', error);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to fetch Instagram content' 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
