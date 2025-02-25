import fetch from "isomorphic-fetch";
import { exponentialBackoff } from "./backoff.js";
import { logInfo, logError } from "./logger.js";

export async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
    let attempt = 0;
    
    while (attempt < retries) {
        try {
            logInfo(`Attempt ${attempt + 1}: Fetching ${url}`);
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response;
        } catch (error) {
            logError(`Attempt ${attempt + 1} failed: ${error.message}`);

            if (attempt === retries - 1) {
                throw error;
            }

            await exponentialBackoff(attempt, delay);
            attempt++;
        }
    }
}
