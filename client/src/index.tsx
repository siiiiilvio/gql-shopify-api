import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
// import { resolvers, typeDefs } from './resolvers';

import App from './App';

const httpLink = createHttpLink({
    uri: 'https://whatsupchickenbutt.myshopify.com/api/2019-07/graphql.json',
});

const middlewareLink = setContext(() => ({
    headers: {
        'X-Shopify-Storefront-Access-Token': 'e31c2abd12eec00fcf5004fc265c3e1a',
    },
}));

const client = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
