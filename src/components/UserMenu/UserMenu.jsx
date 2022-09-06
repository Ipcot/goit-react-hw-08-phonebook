import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { authOperations } from 'redux/auth';
import { Box, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ p: 1, color: 'lightslategray' }}>
      <Box as="span" sx={{ mr: '8px' }}>
        Welcome, {user.name}
      </Box>
      <Button
        sx={{
          color: 'lightslategray',
          border: '2px dotted grey',
        }}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
