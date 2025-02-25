# Fetch With Retry

## Overview
`fetch-with-retry` is a powerful and flexible library for handling API requests with advanced retry mechanisms. It supports AI-powered retry logic, offline queuing, exponential backoff, and seamless integration with REST and GraphQL APIs.

## Features
✅ **AI-Powered Retry:** Dynamically adjusts retry intervals based on previous failures.
✅ **Offline Mode with Retry Queue:** Queues requests when offline and executes them once the network is restored.
✅ **Exponential Backoff with Jitter:** Prevents server overload by increasing wait time between retries.
✅ **GraphQL & REST API Support:** Works seamlessly with both GraphQL and REST requests.
✅ **Customizable Logging:** Uses Winston for structured logging.

## Installation
```sh
npm install fetch-with-retry
```

## Usage

### Basic Usage (REST API)
```js
import { fetchRetry } from 'fetch-with-retry';
const response = await fetchRetry('https://api.example.com/data');
```

### Using with GraphQL API
```js
import { graphqlAdapter } from 'fetch-with-retry';
const query = `{ user(id: "1") { name email } }`;
const response = await graphqlAdapter('https://api.example.com/graphql', query);
```

### Custom Configuration
```js
import fetchRetry from 'fetch-with-retry';
import config from './src/utils/config.js';

const customConfig = { ...config, maxRetries: 3 };
const response = await fetchRetry('https://api.example.com/data', { config: customConfig });
```

## Testing
To run the test suite:
```sh
npm test
```

## Contributing
Feel free to submit issues and pull requests on GitHub to enhance the functionality of this package.

## License
MIT License