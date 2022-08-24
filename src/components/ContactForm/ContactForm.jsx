import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import actions from '../../redux/contacts-actions';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  const reset = () => {
    setFormFields({
      name: '',
      number: '',
    });
  };
  const items = useSelector(state => state.contacts.items);
  const handleSubmit = e => {
    e.preventDefault();
    if (items.some(contact => contact.name === formFields.name.trim())) {
      alert(` ${formFields.name} is already in contacts`);
      return;
    }

    dispatch(actions.addContact(formFields));
    reset();
  };

  return (
    <form className="contacts-form" onSubmit={handleSubmit}>
      Name
      <label className="contacts-form__name-label">
        <input
          className="contacts-form__input"
          type="text"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="contacts-form__name-label">
        Number
        <input
          className="contacts-form__input"
          type="tel"
          name="number"
          value={formFields.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
