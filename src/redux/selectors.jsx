import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  // console.log(state.contacts)
  return state.contacts
};
export const selectValueFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) => {
    console.log(contacts);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  }
);
