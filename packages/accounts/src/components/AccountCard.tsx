import { Box, Text, VStack, Badge, useColorModeValue } from '@chakra-ui/react';

export interface AccountCardProps {
  accountName: string;
  accountType: string;
  balance: number;
  status: 'active' | 'inactive' | 'pending';
  onClick?: () => void;
}

const AccountCard = ({ accountName, accountType, balance, status, onClick }: AccountCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'red';
      case 'pending':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', cursor: onClick ? 'pointer' : 'default' }}
      transition="all 0.2s"
      onClick={onClick}
    >
      <VStack align="stretch" spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            {accountName}
          </Text>
          <Badge colorScheme={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </Box>
        <Text color="gray.500">{accountType}</Text>
        <Text fontSize="2xl" fontWeight="semibold">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </Text>
      </VStack>
    </Box>
  );
};

export default AccountCard; 