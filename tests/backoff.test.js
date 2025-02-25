import applyBackoff from '../src/core/backoff.js';
test('should calculate exponential backoff correctly', () => {
  expect(applyBackoff(1)).toBeGreaterThan(1000);
  expect(applyBackoff(2)).toBeGreaterThan(applyBackoff(1));
});