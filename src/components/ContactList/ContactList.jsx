import PropTypes from 'prop-types';
import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // console.log(contacts)

  return (
    <>
      {/* {contacts.length > 0 && ( */}
      <List>
        <div>
          {contacts.map(contact => (
            <Contact key={contact.id}>
              <ContactItems item={contact} />
            </Contact>
          ))}
        </div>
      </List>
      {/* )} */}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
