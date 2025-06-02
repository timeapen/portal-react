import { Box, Container, Flex, Heading, useColorModeValue, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const headerBg = useColorModeValue('brand.500', 'brand.200');
  const headerColor = useColorModeValue('white', 'gray.800');

  return (
    <Box minH="100vh" bg={bgColor}>
      <Flex
        as="header"
        bg={headerBg}
        color={headerColor}
        p={4}
        alignItems="center"
        boxShadow="sm"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="lg">Application Portal</Heading>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/"
                variant="ghost"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Home
              </Button>
              <Button
                as={RouterLink}
                to="/accounts"
                variant="ghost"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Accounts
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Flex>
      
      <Container maxW="container.xl" py={8}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout; 