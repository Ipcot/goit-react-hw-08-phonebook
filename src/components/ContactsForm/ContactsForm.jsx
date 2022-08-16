import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsFormInput,
  FormStyled,
  ContactsFormLabel,
  Button,
} from './ContactsForm.styled';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/slice';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactsMutation();

  const nameId = nanoid(5);
  const phoneId = nanoid(5);

  const handleInputValueChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = (name, phone) => {
    if (data.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContact({ name, phone });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(name, phone);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <FormStyled autoComplete="off" onSubmit={handleSubmit}>
        <ContactsFormLabel htmlFor={nameId}>Name</ContactsFormLabel>
        <ContactsFormInput
          id={nameId}
          value={name}
          onChange={handleInputValueChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ContactsFormLabel htmlFor={phoneId}>Phone</ContactsFormLabel>
        <ContactsFormInput
          id={phoneId}
          value={phone}
          onChange={handleInputValueChange}
          type="<text>"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </>
  );
};
