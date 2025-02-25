import { fetchWithRetry } from "../core/fetchRetry.js";

export async function restRequest(url, options) {
    return fetchWithRetry(url, options);
}
