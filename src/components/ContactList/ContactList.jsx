import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts)

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
