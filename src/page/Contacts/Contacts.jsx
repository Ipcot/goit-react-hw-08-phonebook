import { Box } from 'components/Box/Box';
import { ContactsForm } from 'components/ContactsForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export const Contacts = () => {
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
