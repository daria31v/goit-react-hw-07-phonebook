import styled from "styled-components";

export const WrapItem = styled.div`
display: flex;
width: 350px;
gap: 8px;
`
export const DeleteBtn = styled.button`
background-color: lightpink;
border-radius: 4px;
border: 2px solid red;
font-size: 14px;
font-weight: 500;
cursor: pointer;
width: 100px;
height: 30px;
:hover{
    background-color: white;
    color: red;
    border: 3px solid red;
    font-weight: 600;
}
`
export const Item = styled.p`
font-size: 16px;
font-weight: 600;
`
export const Wrap = styled.div`
display: flex;
gap: 10px;

`