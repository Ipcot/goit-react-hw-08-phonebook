import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { operations } from 'redux/auth/auth-operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        LOgOut
      </button>
    </div>
  );
};
