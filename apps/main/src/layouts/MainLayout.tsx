import React from 'react';
import { Box, Container, Flex, Heading, Image, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box minH="100vh">
      <Flex
        as="header"
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        height="72px"
        position="fixed"
        width="100%"
        zIndex={1000}
        boxShadow="sm"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" height="100%">
            <Flex align="center">
              {/* Replace with actual DT logo */}
              <Box as="span" fontSize="2xl" fontWeight="bold" color="brand.500" mr={2}>
                DT
              </Box>
              <Heading size="md" color="secondary.800">Application Portal</Heading>
            </Flex>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/"
                variant="ghost"
                color="secondary.700"
                _hover={{ bg: 'gray.50', color: 'brand.500' }}
              >
                Home
              </Button>
              <Button
                as={RouterLink}
                to="/accounts"
                variant="ghost"
                color="secondary.700"
                _hover={{ bg: 'gray.50', color: 'brand.500' }}
              >
                Accounts
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Flex>
      
      <Box pt="72px">
        <Container maxW="container.xl" py={8}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 