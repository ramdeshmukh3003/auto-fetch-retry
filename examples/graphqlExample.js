import { graphqlAdapter } from '../index.js';
const query = `{ user(id: "1") { name email } }`;
graphqlAdapter('https://api.example.com/graphql', query)
  .then(data => console.log(data))
  .catch(error => console.error(error));
