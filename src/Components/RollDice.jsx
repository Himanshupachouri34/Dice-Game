import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice , roleDice}) => {
    

    
    
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
        <img src= {`/public/dice/dice_${currentDice}.png`}  />
        </div>
        <p> Click on Dice to roll </p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
`