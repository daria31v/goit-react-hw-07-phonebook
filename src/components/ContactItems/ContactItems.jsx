import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItems = ({item}) => {
  console.log(item)
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <div>
      
      <Item>
         {item.name}:
      </Item>
      <Item>
         {item.phone}
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
