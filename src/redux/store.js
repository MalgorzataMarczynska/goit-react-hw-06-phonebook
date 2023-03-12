import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, contactsInitialState } from './contactsSlice';
import { filterReducer } from './filterSlice';
const contactList = JSON.parse(localStorage.getItem('contact-list') || 'null');
export const store = configureStore({
  preloadedState: {
    contacts: contactList?.length > 0 ? contactList : contactsInitialState,
  },
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
export default store;
