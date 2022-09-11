import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
// import { Register } from '../page/Register';
// import { Login } from '../page/Login';
// import { Contacts } from 'page/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { useAuth } from 'hooks';
// import { Home } from './Home';
// import { NotFound } from 'pages/NotFound';
import { Loader } from './Loader';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

const Contacts = lazy(() =>
  import('../pages/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

const Login = lazy(() =>
  import('../pages/Login').then(module => ({
    ...module,
    default: module.Login,
  }))
);

const Register = lazy(() =>
  import('../pages/Register').then(module => ({
    ...module,
    default: module.Register,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound').then(module => ({
    ...module,
    default: module.NotFound,
  }))
);

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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
