import css from './ContactItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contactsSlice.js';

export const ContactItem = ({ array }) => {
  const dispatch = useDispatch();

  return (
    <>
      {array.map(contact => (
        <li key={contact.id} className={css.listItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
ContactItem.propTypes = {
  array: PropTypes.array,
};
