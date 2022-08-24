import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import actions from '../../redux/contacts-actions';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterContainer}>
      <p>Find contacts by name</p>
      <input
        className={s.filterInput}
        name="filter"
        value={filterValue}
        onChange={e => {
          dispatch(actions.changeFilter(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};

export default Filter;
