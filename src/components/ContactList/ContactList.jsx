import { ContactItem } from 'components/ContactItem';
import { WarningMessage, ContactsListUL } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/slice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredName = data?.filter(item => item.name.includes(filter));

  return (
    <ContactsListUL>
      {!filteredName && filter !== '' && (
        <WarningMessage>No such contact Name</WarningMessage>
      )}
      {!filteredName && filter === '' && (
        <WarningMessage>Contacts list empty</WarningMessage>
      )}
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        filteredName.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })
      )}
      {/* {filteredName.length > 0 &&
        filteredName.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })} */}
    </ContactsListUL>
  );
};
