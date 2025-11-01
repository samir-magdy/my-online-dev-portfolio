// lib/redis.ts
import { Redis } from "@upstash/redis";

// --- Environment Variable Checks (Recommended for Robustness) ---
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
  throw new Error(
    "Missing Upstash Redis environment variables. Ensure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are set in your .env.local file."
  );
}

// --- Initialize the Client ---
export const redis = new Redis({
  // Since we checked for existence above, we can safely pass the values.
  // The Upstash Redis client uses these credentials to connect.
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});
