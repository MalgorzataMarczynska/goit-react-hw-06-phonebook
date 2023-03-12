export const getContacts = state => state.contacts;
export const getFilters = state => state.filters;
export const getUsername = state => state.contacts.map(contact => contact.name);
export const getNumber = state => state.contacts.map(contact => contact.number);
export const getId = state => state.contacts.map(contact => contact.id);

export const getFilteredContacts = state =>
  state.contacts.filter(contact =>
    contact.name
      .toString()
      .toLowerCase()
      .includes(state.filters.toString().toLowerCase())
  );
