import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Filter } from './filter/Filter.js';
import { ContactList } from './ContactList/ContactList.js';
import { ContactItem } from './ContactItem/ContactItem.js';
import { ContactForm } from './ContactForm/ContactForm.js';
import { getContacts, getFilteredContacts, getFilters } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filters = useSelector(getFilters);

  useEffect(() => {
    const contactListStringified = JSON.stringify(contacts);
    window.localStorage.setItem('contact-list', contactListStringified);
  }, [contacts]);

  return (
    <div>
      <h1 className="main-title">Phonebook</h1>
      <section>
        <ContactForm />
      </section>
      <section>
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList>
          {filters === null ? (
            <ContactItem array={contacts} />
          ) : (
            <ContactItem array={filteredContacts} />
          )}
        </ContactList>
      </section>
    </div>
  );
};
