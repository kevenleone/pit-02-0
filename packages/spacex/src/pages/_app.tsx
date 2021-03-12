import 'react-bulma-components/dist/react-bulma-components.min.css';

import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import React from 'react';

import { useApollo } from '../graphql/nextApollo';

interface AppProps {
  Component: NextPage;
  pageProps: any;
}

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
