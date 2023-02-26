import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectValueFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) => {
    console.log("Calculating task count. Now memoized!");
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts)
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  }
);
