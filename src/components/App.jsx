import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchAllContacts } from '../redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h3>Please waite the request in progress...🐌</h3>}
      {error && !isLoading && <h3>Something went wrong... ♫ ♫ ♫ Try later ♫ ♫ ♫</h3>}
       <ContactList />
    </Box>
  );
};
