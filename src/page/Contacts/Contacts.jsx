import { Box } from '@mui/material';
import { ContactsForm } from 'components/ContactsForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';


export const Contacts = () => {
  return (
    <Box px="30%">
      <Box textAlign="center" sx={{ color: 'green' }} as="h1">
        Phonebook
      </Box>
      <ContactsForm />
     
      <Box textAlign="center" sx={{ color: 'green' }} as="h2">
        Contacts
      </Box>
      <Filter />
      <ContactList />
    </Box>
  );
};
