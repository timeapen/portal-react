import { Box, Grid, Heading, Button, useDisclosure, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AccountCard from '../components/AccountCard';

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

  return (
    <VStack spacing={6} align="stretch">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading size="lg">My Accounts</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="brand" onClick={onOpen}>
          Add Account
        </Button>
      </Box>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {sampleAccounts.map((account) => (
          <AccountCard
            key={account.id}
            accountName={account.accountName}
            accountType={account.accountType}
            balance={account.balance}
            status={account.status}
          />
        ))}
      </Grid>

      {/* Add Account Modal can be added here later */}
    </VStack>
  );
};

export default Accounts; 