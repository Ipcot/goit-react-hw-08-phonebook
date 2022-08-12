import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Box } from './Box/Box.styled';

export const App = () => {
  return (
    <Box px="30%">
      <Box textAlign="center" colors={p => p.theme.colors.black} as="h1">
        Phonebook
      </Box>
      <ContactsForm />

      <Box textAlign="center" colors={p => p.theme.colors.black} as="h2">
        Contacts
      </Box>
      <Filter />
      <ContactList />
    </Box>
  );
};
