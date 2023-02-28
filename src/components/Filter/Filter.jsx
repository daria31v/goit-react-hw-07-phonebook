import { Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectValueFilter } from '../../redux/selectors';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValueFilter);
  const idInput = nanoid();

  const changeFilter = e => {
    const value = e.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label htmlFor="idInput">Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        onChange={changeFilter}
        id={idInput}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string
}.isRequired