import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import ListingsPage from './pages/ListingPage';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ListingsPage />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
