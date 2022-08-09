import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';
import { WarningMessage, ContactsListUL } from './ContactList.styled';
import { getItems, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredName = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsListUL>
      {filteredName.length === 0 && filter && (
        <WarningMessage>No such contact Name</WarningMessage>
      )}
      {filteredName.length === 0 && filter === '' && (
        <WarningMessage>Contacts list empty</WarningMessage>
      )}

      {filteredName.length > 0 &&
        filteredName.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })}
    </ContactsListUL>
  );
};
