import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { ContactInfo, ContactItemButton } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contacts';

export const ContactItem = ({ item: { id, number, name } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <ContactInfo key={id}>
        {name}: {number}
        <ContactItemButton
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          <MdDelete />
          Delete
        </ContactItemButton>
      </ContactInfo>
    </>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
