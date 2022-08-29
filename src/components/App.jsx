// import { ContactsForm } from './ContactsForm';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
// import { Box } from './Box/Box.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterView } from '../page/RegisterView/RegisterView';
import { Login } from '../page/LoginView/LoginView';

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
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterView />} />
        {/* <Route path="register" element={<RegisterView />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="contacts" element={<>Contacts</>} /> */}
      </Route>
    </Routes>
  );
};
