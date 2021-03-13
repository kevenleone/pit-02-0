import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Columns } from 'react-bulma-components';

import LaunchCard from '../components/LaunchCard';
import Page from '../components/Page';
import { initializeApollo } from '../graphql/nextApollo';
import { launchesQuery } from '../graphql/queries';
import { Launch } from '../interfaces';

type LaunchesProps = {
  launches: Launch[];
};

const Index: React.FC<LaunchesProps> = ({ launches }) => {
  const router = useRouter();

  const onClickLaunch = (launch: Launch) => {
    router.push(`/launch/${launch.id}`);
  };

  return (
    <Page title="Launch List">
      <Columns>
        {launches.map((launch) => (
          <Columns.Column key={launch.id} size={6}>
            <LaunchCard launch={launch} onClickLaunch={onClickLaunch} />
          </Columns.Column>
        ))}
      </Columns>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  const { data } = await client.query({
    query: launchesQuery,
  });

  if (data.launches) {
    return {
      props: {
        launches: data.launches,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default Index;
