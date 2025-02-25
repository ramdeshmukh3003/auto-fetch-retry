import offlineQueue from '../src/core/offlineQueue.js';
test('should queue requests when offline and retry when online', () => {
  offlineQueue.addRequest({ url: 'https://api.example.com', options: {} });
  expect(offlineQueue.getQueue().length).toBe(1);
  offlineQueue.processQueue();
  expect(offlineQueue.getQueue().length).toBe(0);
});