import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../../redux/auth/auth-operation';

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
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          User Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          User Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          User Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="sumbit">Submit Register</button>
      </form>
    </div>
  );
};
