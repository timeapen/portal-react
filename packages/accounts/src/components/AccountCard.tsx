import * as React from 'react';
import { Box, Text, VStack, Badge, useColorModeValue } from '@chakra-ui/react';

export interface AccountCardProps {
  accountName: string;
  accountType: string;
  balance: number;
  status: 'active' | 'inactive' | 'pending';
  onClick?: () => void;
}

const AccountCard = ({ accountName, accountType, balance, status, onClick }: AccountCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'brand.500';
      case 'inactive':
        return 'red.500';
      case 'pending':
        return 'orange.500';
      default:
        return 'gray.500';
    }
  };

  return (
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      boxShadow="sm"
      _hover={{
        transform: onClick ? 'translateY(-2px)' : 'none',
        boxShadow: onClick ? 'md' : 'sm',
        borderColor: onClick ? 'brand.500' : 'gray.200',
        cursor: onClick ? 'pointer' : 'default'
      }}
      transition="all 0.2s"
      onClick={onClick}
    >
      <VStack align="stretch" spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" color="secondary.800">
            {accountName}
          </Text>
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            textTransform="capitalize"
            bg={`${getStatusColor(status)}15`}
            color={getStatusColor(status)}
          >
            {status}
          </Badge>
        </Box>
        <Text color="secondary.600" fontSize="sm">
          {accountType}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" color="secondary.900">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </Text>
      </VStack>
    </Box>
  );
};

export default AccountCard; 