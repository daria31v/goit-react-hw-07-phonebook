import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {selectIsLoading, selectError, 
  // getContacts
} from '../redux/selectors';
import {fetchAllContacts} from '../redux/operations';
import { useEffect } from 'react';

export const App = () => {
const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
// const  items  = useSelector(getContacts);

useEffect(()=>{
  dispatch(fetchAllContacts());
  
}, [dispatch]);


  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <h2>Please waite the request in prigress...</h2>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <Filter />
      <ContactList/>
    </Box>
  );
};

