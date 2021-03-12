import React from 'react';
import {
  Card,
  Columns,
  Content,
  Heading,
  Media,
  Section,
} from 'react-bulma-components';

import { Launch } from '../interfaces';

type LaunchCardProps = {
  launch: Launch;
  onClickLaunch?: (launch: Launch) => void;
};

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, onClickLaunch }) => {
  return (
    <Section>
      <Card>
        <Columns>
          <Columns.Column>
            <Card.Image src={launch.links.mission_patch} />
          </Columns.Column>
          <Columns.Column>
            <Card.Content>
              <Media>
                <Media.Item>
                  <Heading
                    onClick={() =>
                      onClickLaunch ? onClickLaunch(launch) : null
                    }
                    size={4}
                  >
                    {launch.mission_name}
                  </Heading>
                  <Heading subtitle size={6}>
                    @johnsmith
                  </Heading>
                </Media.Item>
              </Media>
              <Content>
                {launch.details}
                <br />
                <time dateTime="2016-1-1">{launch.launch_date_utc}</time>
              </Content>
            </Card.Content>
          </Columns.Column>
        </Columns>
      </Card>
    </Section>
  );
};

export default LaunchCard;
