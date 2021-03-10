import { gql, useQuery } from '@apollo/client';
import React from 'react';

import {
  Container,
  Launch,
  LaunchDate,
  LaunchLabel,
  LaunchList,
  LaunchName,
  LaunchStatus,
} from '../styles/pages/launch';

interface Launch {
  id: string;
  mission_name: string;
  launch_success: boolean;
  launch_date_utc: string;
  links: {
    flickr_images: string[];
  };
}

interface LaunchResponse {
  launches: Array<Launch>;
}

const launchesQuery = gql`
  query {
    launches {
      id
      mission_name
      launch_success
      launch_date_utc
      links {
        flickr_images
      }
    }
  }
`;

const Index = () => {
  const { data, error, loading } = useQuery<LaunchResponse>(launchesQuery);

  const { launches = [] } = data || {};

  if (error) {
    return <div>Opa, deu erro...</div>;
  }

  return (
    <Container>
      <LaunchList>
        {launches.map((launch) => (
          <Launch key={launch.id}>
            <LaunchName>{launch.mission_name}</LaunchName>
            <LaunchDate>{launch.launch_date_utc}</LaunchDate>
            <LaunchStatus>
              <LaunchLabel launchStatus={launch.launch_success}>
                {launch.launch_success ? 'Success' : 'Failed'}
              </LaunchLabel>
            </LaunchStatus>
          </Launch>
        ))}
      </LaunchList>
    </Container>
  );
};

export default Index;
