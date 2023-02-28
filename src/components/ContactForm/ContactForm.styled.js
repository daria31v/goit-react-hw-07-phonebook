import styled from 'styled-components';
export const FormAddContacts = styled.div`
display: flex;
gap: 20px;
`;
export const AddContactBtn = styled.button`
    margin-top: 20px;
    display: block;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background-color:  #72759c;
    border-radius: 4px;
    border: 2px solid black;
    color: white;
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
    :hover{
    background-color: green;
    border: 3px solid green;
    font-weight: 600;
}
`;
export const ErrorText = styled.p`
color: red
`

export const Label = styled.label`
display: flex;
gap: 8px;
font-size: 16px;
font-weight: 600;
`