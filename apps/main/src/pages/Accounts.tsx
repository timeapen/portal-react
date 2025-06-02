import React, { useCallback, useState, useEffect } from 'react';
import { Box, Heading, Button, useDisclosure, VStack, Center, Spinner } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { AccountList } from '@portal/accounts';

const sampleAccounts = [
  {
    id: 1,
    accountName: 'Main Checking',
    accountType: 'Checking Account',
    balance: 5234.56,
    status: 'active' as const,
  },
  {
    id: 2,
    accountName: 'Savings',
    accountType: 'Savings Account',
    balance: 12750.83,
    status: 'active' as const,
  },
  {
    id: 3,
    accountName: 'Investment Portfolio',
    accountType: 'Investment Account',
    balance: 45678.12,
    status: 'active' as const,
  },
  {
    id: 4,
    accountName: 'Emergency Fund',
    accountType: 'Savings Account',
    balance: 8500.00,
    status: 'active' as const,
  },
];

const Accounts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accounts, setAccounts] = useState<typeof sampleAccounts>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with delay
    const loadAccounts = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      setAccounts(sampleAccounts);
      setIsLoading(false);
    };

    loadAccounts();
  }, []);

  const handleAccountClick = useCallback((accountId: number) => {
    console.log(`Account clicked: ${accountId}`);
    // You can add navigation or modal opening logic here
  }, []);

  if (isLoading) {
    return (
      <Center py={12}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <VStack spacing={6} align="stretch">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading size="lg">My Accounts</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="brand" onClick={onOpen}>
          Add Account
        </Button>
      </Box>

      <AccountList 
        accounts={accounts}
        onAccountClick={handleAccountClick}
      />

      {/* Add Account Modal can be added here later */}
    </VStack>
  );
};

export default Accounts; 