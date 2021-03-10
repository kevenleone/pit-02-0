import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { useApollo } from '../graphql/nextApollo';
import { Page } from '../styles/pages/page';

interface AppProps {
  Component: NextPage;
  pageProps: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    background: '#fafafa',
    primary: '#0070f3',
  },
};

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </ApolloProvider>
  );
}
