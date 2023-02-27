import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItems = ({items: {name, phone, id}}) => {
  console.log(name)
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <Item>
         {name}:{phone}
      </Item>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </div>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string
}.isRequired;
