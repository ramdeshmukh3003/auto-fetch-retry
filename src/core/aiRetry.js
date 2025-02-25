export function aiAdjustRetries(previousFailures) {
    return Math.min(5, previousFailures * 1.5);
}
