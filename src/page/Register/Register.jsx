import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../../redux/auth/auth-operation';
import { Box, TextField, Button } from '@mui/material';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Box
        mt={4}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'lightslategray',
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          required
          label="User Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          required
          label="User Email"
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
          onChange={handleChange}
        />

        <Button
          sx={{
            margin: '4px',
            color: 'lightslategray',
          }}
          variant="outlined"
          type="sumbit"
        >
          Submit Register
        </Button>
      </Box>
    </div>
  );
};
