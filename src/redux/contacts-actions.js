import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('çontacts/add', data => ({
  payload: {
    id: nanoid(),
    name: data.name.trim(),
    number: data.number.trim(),
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { addContact, deleteContact, changeFilter };
