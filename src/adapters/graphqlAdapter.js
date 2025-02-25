import { fetchWithRetry } from "../core/fetchRetry.js";

export async function graphqlRequest(endpoint, query, variables = {}) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
    };

    return fetchWithRetry(endpoint, options);
}
