import { fetchRetry } from '../index.js';
fetchRetry('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));