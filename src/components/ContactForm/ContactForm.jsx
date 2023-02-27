import {
  AddContactBtn,
  Label,
  FormAddContacts,
  ErrorText,
} from './ContactForm.styled';
// import {toast} from 'react-hot-toast'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';


const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

// const notifyContactExist = ()=> toast ('This contact has already been added.')

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);
  console.log(listContacts)
 
  const submitForm =  (values, { resetForm }) => {
    console.log(values)
    // if (listContacts.filter(item => item.name === values.name)) {
    // notifyContactExist();
   
    dispatch(addContact(values));
    resetForm();  
    
  // };
}
  const nameInputId = nanoid();
  const telInputId = nanoid();

  return (
    <Formik
    initialValues={{
      name: '',
      phone: '',
    }}
      onSubmit={submitForm}>
      <Form>
        <FormAddContacts>
          <Label htmlFor={nameInputId}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Jacob Mercer"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
            <FormError name="name" component="span" />
          </Label>

          <Label htmlFor={telInputId}>
            Number
            <Field
              type="tel"
              name="phone"
              placeholder="+380000000000"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={telInputId}
            />
            <FormError name="phone" component="span" />
          </Label>
        </FormAddContacts>

        <AddContactBtn type="submit">Add contacts</AddContactBtn>
      </Form>
    </Formik>
  );
}
