import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Register } from '../page/Register';
import { Login } from '../page/Login';
import { Contacts } from 'page/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { useAuth } from 'hooks';
import { Home } from './Home';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute component={<Home />} />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
