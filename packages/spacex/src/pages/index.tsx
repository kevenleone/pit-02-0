import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { Columns } from 'react-bulma-components';

import LaunchCard from '../components/LaunchCard';
import Page from '../components/Page';
import { launchesQuery } from '../graphql/queries';
import { Launch, LaunchResponse } from '../interfaces';

const Index: React.FC = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery<LaunchResponse>(launchesQuery);

  const { launches = [] } = data || {};

  const onClickLaunch = (launch: Launch) => {
    router.push(`/launch/${launch.id}`);
  };

  if (error) {
    return <div>Opa, deu erro...</div>;
  }

  return (
    <Page loading={loading} title="Launch List">
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

export default Index;
