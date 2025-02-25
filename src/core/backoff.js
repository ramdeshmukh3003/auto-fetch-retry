export async function exponentialBackoff(attempt, baseDelay) {
    const jitter = Math.random() * 100;
    const delay = baseDelay * Math.pow(2, attempt) + jitter;

    return new Promise((resolve) => setTimeout(resolve, delay));
}
