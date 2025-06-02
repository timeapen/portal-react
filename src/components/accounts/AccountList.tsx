import { Grid } from '@chakra-ui/react';
import AccountCard from './AccountCard';
import type { AccountCardProps } from './AccountCard';

interface Account extends Omit<AccountCardProps, 'onClick'> {
  id: number;
}

interface AccountListProps {
  accounts: Account[];
  onAccountClick?: (accountId: number) => void;
}

const AccountList = ({ accounts, onAccountClick }: AccountListProps) => {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
    >
      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          accountName={account.accountName}
          accountType={account.accountType}
          balance={account.balance}
          status={account.status}
          onClick={onAccountClick ? () => onAccountClick(account.id) : undefined}
        />
      ))}
    </Grid>
  );
};

export default AccountList; 