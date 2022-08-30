import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';
import { operations } from 'redux/auth/auth-operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        LOgOut
      </button>
    </div>
  );
};
