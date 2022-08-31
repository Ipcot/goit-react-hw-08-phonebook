// import { ContactsForm } from './ContactsForm';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
// import { Box } from './Box/Box.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Register } from '../page/Register/Register';
import { Login } from '../page/Login/Login';
import { Contacts } from 'page/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { operations } from 'redux/auth/auth-operation';
import { PublicRoute } from '../routes/PublicRoutes';
import { PrivateRoute } from '../routes/PrivateRoutes';

// export const App = () => {
//   return (
//     <Box px="30%">
//       <Box textAlign="center" colors={p => p.theme.colors.black} as="h1">
//         Phonebook
//       </Box>
//       <ContactsForm />

//       <Box textAlign="center" colors={p => p.theme.colors.black} as="h2">
//         Contacts
//       </Box>
//       <Filter />
//       <ContactList />
//     </Box>
//   );
// };

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<PublicRoute redirectTo="/" />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<PublicRoute redirectTo="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
  );
};
