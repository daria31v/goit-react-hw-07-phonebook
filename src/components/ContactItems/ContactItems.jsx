import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItems = ({ item: { name, phone, id} }) => {
  
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Item>
        {name}:{phone}
      </Item>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.number.isRequired,
}.isRequired;
