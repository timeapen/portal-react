import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to the Portal</Heading>
        <Text fontSize="xl" color="gray.600">
          Access all your applications in one place
        </Text>
      </Box>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {/* Application cards will be added here */}
      </Grid>
    </VStack>
  );
};

export default Home; 