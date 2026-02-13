import { analytics, type InsertAnalytics } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  recordAnalytics(event: InsertAnalytics): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async recordAnalytics(event: InsertAnalytics): Promise<void> {
    await db.insert(analytics).values(event);
  }
}

export const storage = new DatabaseStorage();
