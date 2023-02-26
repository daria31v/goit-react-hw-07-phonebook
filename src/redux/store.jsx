import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

console.log(contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});