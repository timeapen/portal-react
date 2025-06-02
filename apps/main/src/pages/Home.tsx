import React from 'react';
import { Box, Grid, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <VStack spacing={12} align="stretch">
      <Box textAlign="center" py={8}>
        <Heading size="2xl" mb={4} color="secondary.900">
          Welcome to DT Portal
        </Heading>
        <Text fontSize="xl" color="secondary.600" maxW="2xl" mx="auto">
          Access and manage all your DT accounts and services in one secure place
        </Text>
      </Box>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
      >
        <Box
          p={8}
          bg="white"
          borderRadius="lg"
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
          transition="all 0.2s"
          onClick={() => navigate('/accounts')}
          cursor="pointer"
        >
          <VStack spacing={4} align="stretch">
            <Heading size="md" color="secondary.800">
              Accounts
            </Heading>
            <Text color="secondary.600">
              View and manage your checking, savings, and investment accounts
            </Text>
            <Button variant="ghost" colorScheme="brand" size="sm" alignSelf="flex-start">
              View Accounts →
            </Button>
          </VStack>
        </Box>

        <Box
          p={8}
          bg="white"
          borderRadius="lg"
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <VStack spacing={4} align="stretch">
            <Heading size="md" color="secondary.800">
              Transfers
            </Heading>
            <Text color="secondary.600">
              Send money, pay bills, and manage recurring transfers
            </Text>
            <Button variant="ghost" colorScheme="brand" size="sm" alignSelf="flex-start">
              Make Transfer →
            </Button>
          </VStack>
        </Box>

        <Box
          p={8}
          bg="white"
          borderRadius="lg"
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <VStack spacing={4} align="stretch">
            <Heading size="md" color="secondary.800">
              Services
            </Heading>
            <Text color="secondary.600">
              Access additional banking services and support
            </Text>
            <Button variant="ghost" colorScheme="brand" size="sm" alignSelf="flex-start">
              View Services →
            </Button>
          </VStack>
        </Box>
      </Grid>
    </VStack>
  );
};

export default Home; 