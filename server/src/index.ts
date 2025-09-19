import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Hono } from "hono";

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
    ssl: true,
  },
});

const app = new Hono();
