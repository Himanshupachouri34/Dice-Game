import React from 'react'
import styled from 'styled-components'


const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/public/dice-1.png"  />
        </div>
        <div className='content'>
            <h1>
            DICE GAME 
            </h1>
            <Button
            onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

  .content{
    display: flex;
    align-items: end;
    flex-direction: column;
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`
const Button = styled.button`
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