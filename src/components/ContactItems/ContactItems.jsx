import PropTypes from 'prop-types';
import { DeleteBtn, Item, WrapItem, Wrap } from './ContactItems.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { GiRotaryPhone } from 'react-icons/gi';

export const ContactItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(item.id));

  return (
    <Wrap>
      <GiRotaryPhone />
      <WrapItem>
        <Item>{item.name}:</Item>
        <Item>{item.phone}</Item>
      </WrapItem>
      <div>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
      </div>
    </Wrap>
  );
};

ContactItems.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
