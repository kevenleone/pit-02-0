import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';

import LaunchCard from '../../components/LaunchCard';
import Meta from '../../components/Meta';
import Page from '../../components/Page';
import { launchQuery } from '../../graphql/queries';

const Launch: React.FC = () => {
  const {
    push,
    query: { id },
  } = useRouter();

  const { data, error, loading } = useQuery(launchQuery, {
    variables: {
      id,
    },
  });

  const { launch } = data || {};

  return (
    <Page
      title={launch?.mission_name}
      loading={loading}
      error={error}
      onClickBack={() => push('/')}
    >
      <Meta
        image={launch?.links?.mission_patch}
        description={launch?.detail}
        title={`Mission Name - ${launch?.mission_name}`}
      />
      <LaunchCard launch={launch} />
    </Page>
  );
};

export default Launch;
