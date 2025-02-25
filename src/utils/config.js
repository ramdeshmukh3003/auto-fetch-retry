const config = {
    maxRetries: 5,
    baseDelay: 1000, // 1 second
    jitter: true,
    retryStatusCodes: [500, 502, 503, 504],
  };
  
  export default config;