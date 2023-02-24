import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <GiRotaryPhone />
          <ContactItems item={contact} />
        </Contact>
      ))}
    </List>
  );
};
