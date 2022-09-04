import { Box } from '@mui/material';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as="header"
      borderBottom="2px dotted grey"
      // bgcolor={p => p.theme.colors.green}
    >
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
