import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
