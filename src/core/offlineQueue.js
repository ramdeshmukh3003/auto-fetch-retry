const offlineQueue = [];

export function addToQueue(request) {
    offlineQueue.push(request);
}

export async function processQueue() {
    while (offlineQueue.length > 0) {
        const request = offlineQueue.shift();
        try {
            await fetchWithRetry(request.url, request.options);
        } catch (error) {
            addToQueue(request); // Retry later
        }
    }
}

window.addEventListener("online", processQueue);
