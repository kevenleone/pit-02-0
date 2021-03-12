import React from 'react';
import { Box, Button, Container, Heading } from 'react-bulma-components';

import Loading from './Loading';

type PageProps = {
  title: string;
  loading: boolean;
  error: any;
  onClickBack?: () => void;
};

const Page: React.FC<PageProps> = ({
  children,
  error,
  loading,
  onClickBack,
  title,
}) => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Box>
        <Heading>{title}</Heading>

        {onClickBack && <Button onClick={onClickBack}>Go Back</Button>}
      </Box>

      {error && <div>{error.message}</div>}

      {loading ? <Loading /> : children}
    </Container>
  );
};

export default Page;
