import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Basic Analytics to track views/clicks since this is a review page
export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  event_type: text("event_type").notNull(), // 'view', 'click_cta'
  location: text("location"), // 'hero', 'footer', etc.
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertAnalyticsSchema = createInsertSchema(analytics).omit({ id: true, timestamp: true });

export type AnalyticsItem = typeof analytics.$inferSelect;
export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;
