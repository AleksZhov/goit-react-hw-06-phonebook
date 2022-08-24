import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import actions from '../../redux/contacts-actions';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className="filter-container">
      <p>Find contacts by name</p>
      <input
        name="filter"
        value={filterValue}
        onChange={e => {
          dispatch(actions.changeFilter(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onchange: PropTypes.func,
};

export default Filter;
