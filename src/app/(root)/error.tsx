'use client';

import { Container, Flex } from '@chakra-ui/react';

const Error = ({ error }: any) => (
  <Flex alignItems='center' minH='100vh' justifyContent='center'>
    <Container maxW='container.lg' textAlign='center'>
      <h1>An error has occurred: {error.message}</h1>
    </Container>
  </Flex>
);

export default Error;
