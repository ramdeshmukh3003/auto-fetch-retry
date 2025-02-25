import aiRetry from '../src/core/aiRetry.js';
test('should adjust retry based on previous failures', () => {
  const result = aiRetry(3, [500, 502, 504]);
  expect(result).toBeGreaterThan(1000);
});
