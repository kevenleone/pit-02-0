import { gql } from '@apollo/client';

const LAUNCH_FRAGMENT = gql`
  fragment LaunchesFragment on Launch {
    id
    details
    mission_name
    launch_success
    launch_date_utc
    links {
      flickr_images
      mission_patch
      mission_patch_small
    }
  }
`;

const launchesQuery = gql`
  ${LAUNCH_FRAGMENT}

  query {
    launches {
      ...LaunchesFragment
    }
  }
`;

const launchQuery = gql`
  ${LAUNCH_FRAGMENT}

  query launch($id: ID!) {
    launch(id: $id) {
      ...LaunchesFragment
    }
  }
`;

export { launchesQuery, launchQuery };
