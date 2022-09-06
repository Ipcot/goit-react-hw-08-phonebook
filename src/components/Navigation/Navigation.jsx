import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display="flex">
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography
            sx={{
              p: 2,
              display: 'block',
              color: 'green',
            }}
          >
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
