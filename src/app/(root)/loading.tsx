import { Flex, Container, Stack, Box, SimpleGrid, Skeleton, AspectRatio } from '@chakra-ui/react';

const Loading = () => (
  <Flex alignItems='center' minH='100vh' justifyContent='center'>
    <Container maxW='container.lg'>
      <Stack p='5' alignItems='center' spacing='5'>
        <SimpleGrid spacing='5' columns={{ base: 1, md: 5 }}>
          {[...Array(20)].map((id) => (
            <Box key={id}>
              <Stack spacing='5' boxShadow='xl' p='5' w='full' borderRadius='xl' alignItems='center'>
                <AspectRatio w='full' ratio={1}>
                  <Skeleton />
                </AspectRatio>
                <Skeleton />
                <Skeleton />
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Flex>
);

export default Loading;
