import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import React, { useState } from 'react'



const GamePlay = () => {
    const [score , setScore] = useState(0)
    const [selectedNumber, SetSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)

    const randomNumber = (min , max) => {
       
        return Math.floor(Math.random() *(max - min) + min)
    }

    const roleDice = () => {
       const randomNum =  randomNumber(1,7)

       setCurrentDice((prev) => randomNum)

       if (selectedNumber === randomNum) {
        setScore(prev => prev + randomNum )
       }else {
        setScore(prev => prev - 2 )
       }
       SetSelectedNumber(undefined)
    }

  return (
    <MainContainer>
        <div className="topSection">
        <TotalScore score = {score} />
        <NumberSelector
        selectedNumber= {selectedNumber}
        SetSelectedNumber= {SetSelectedNumber}
        />
        </div>

        <RollDice
        currentDice = {currentDice}
        roleDice = {roleDice}
        />
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`