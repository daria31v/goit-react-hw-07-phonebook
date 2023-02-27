import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectValueFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) => {
    console.log('memorized');
    // const normalizedFilter = filter.toLowerCase();
    const contactName = contacts.filter(contact => contact.name);
    console.log(contactName)
    return contactName
    // return contacts.filter(({name}) => );
  }
);
