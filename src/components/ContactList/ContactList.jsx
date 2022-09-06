import { ContactItem } from 'components/ContactItem';
import { WarningMessage, ContactsListUL } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredName = data?.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!filteredName) {
    return;
  }

  return (
    <ContactsListUL>
      {filteredName.length === 0 && filter !== '' && (
        <WarningMessage>No such contact Name</WarningMessage>
      )}
      {filteredName.length === 0 && filter === '' && (
        <WarningMessage>Contacts list empty</WarningMessage>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        filteredName.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })
      )}
    </ContactsListUL>
  );
};
