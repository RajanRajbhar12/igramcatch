import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Waitlist subscribers table
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Instagram content downloads tracking (optional)
export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  instagramUrl: text("instagram_url").notNull(),
  contentType: text("content_type").notNull(), // 'photo', 'video', 'reel', etc.
  downloadedAt: timestamp("downloaded_at").defaultNow().notNull(),
  subscriberId: integer("subscriber_id").references(() => subscribers.id),
});

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  name: true,
});

// Validation schemas for forms and API requests
export const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

export const instagramUrlSchema = z.object({
  url: z.string()
    .url({ message: "Please enter a valid URL" })
    .refine((url) => url.includes('instagram.com'), {
      message: "Please enter a valid Instagram URL"
    })
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertDownload = typeof downloads.$inferInsert;
export type Download = typeof downloads.$inferSelect;
