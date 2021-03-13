import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import LaunchCard from '../../components/LaunchCard';
import Meta from '../../components/Meta';
import Page from '../../components/Page';
import { initializeApollo } from '../../graphql/nextApollo';
import { launchQuery } from '../../graphql/queries';
import { Launch } from '../../interfaces';

type LaunchProps = {
  launch: Launch;
};

const LaunchComponent: React.FC<LaunchProps> = ({ launch }) => {
  const router = useRouter();

  return (
    <Page title={launch.mission_name} onClickBack={() => router.push('/')}>
      <Meta
        image={launch.links.mission_patch}
        description={launch.details}
        title={`Mission Name - ${launch.mission_name}`}
      />
      <LaunchCard launch={launch} />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...new Array(50)].map((data, index) => ({
    params: { id: String(index + 1) },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = initializeApollo();
  const { id } = context.params;

  try {
    const { data } = await client.query({
      query: launchQuery,
      variables: {
        id,
      },
    });

    return {
      props: {
        launch: data.launch,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default LaunchComponent;
