import React from 'react';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import actions from '../../redux/contacts-actions';

function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const getFilteredContacts = () => {
    const filteredContactsArray = [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredContactsArray;
  };

  return (
    <ul className="contacts">
      {getFilteredContacts().map(({ name, number, id }) => {
        return (
          <li key={number} className="contacts__item">
            <p>
              • {name} : {number}
            </p>
            <button
              type="button"
              className="contacts__del-btn"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
