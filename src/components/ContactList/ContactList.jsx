import PropTypes from 'prop-types';
import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';
import { GiRotaryPhone } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts)
  
  return (
    <>
    {contacts.length > 0 && (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id}> 
          <GiRotaryPhone />
          <ContactItems items={contact} />
        </Contact>
      ))}
    </List>
    )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};