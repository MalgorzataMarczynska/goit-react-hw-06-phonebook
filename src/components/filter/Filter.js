import css from './Filter.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = evt => dispatch(setFilter(evt.target.value));
  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
      />
    </div>
  );
};
Filter.propTypes = {
  searchQuery: PropTypes.func,
};
