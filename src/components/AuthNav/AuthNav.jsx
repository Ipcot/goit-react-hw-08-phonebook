import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <NavLink to="/register">
        <Typography
          sx={{
            p: 2,
            color: 'lightslategray',
          }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography
          sx={{
            p: 2,
            color: 'lightslategray',
          }}
        >
          Login
        </Typography>
      </NavLink>
    </Box>
  );
};
