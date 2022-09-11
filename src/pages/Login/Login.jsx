import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth';
import { Box, Container, TextField, Button } from '@mui/material';
import { Helmet } from 'react-helmet';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="sm">
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <Box
        mt={4}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          required
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          required
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          minLength="6"
          onChange={handleChange}
        />

        <Button
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          variant="outlined"
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
