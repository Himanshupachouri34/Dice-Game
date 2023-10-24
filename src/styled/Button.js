import styled from 'styled-components'



export const Button = styled.button`
color: white;
min-width: 220px;
padding: 10px 18px;
border-radius: 5px;
background: #000;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.5s;
cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.5s ;
    font-size: 18px;
  }
`
export const OutlineButton = styled(Button)`
border: 1px solid black;
background-color: white;
color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}`;