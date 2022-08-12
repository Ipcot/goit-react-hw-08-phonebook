// import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { ContactInfo, ContactItemButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';

export const ContactItem = ({ item: { id, phone, name } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactInfo key={id}>
        {name}: {phone}
        <ContactItemButton
          type="button"
          onClick={() => dispatch(removeContact(id))}
        >
          <MdDelete />
          Delete
        </ContactItemButton>
      </ContactInfo>
    </>
  );
};

// ContactItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };
