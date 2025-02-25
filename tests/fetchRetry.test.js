import fetchRetry from '../src/core/fetchRetry.js';
test('should retry failed request', async () => {
  const mockFetch = jest.fn()
    .mockRejectedValueOnce(new Error('Network error'))
    .mockResolvedValue({ ok: true, json: () => ({ success: true }) });

  const result = await fetchRetry('https://api.example.com', { fetchFunction: mockFetch });
  expect(result.success).toBe(true);
  expect(mockFetch).toHaveBeenCalledTimes(2);
});