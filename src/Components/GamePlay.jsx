import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import Rules from "./Rules"
import React, { useState } from 'react'
import { Button , OutlineButton } from '../styled/Button'



const GamePlay = () => {
    const [score , setScore] = useState(0)
    const [selectedNumber, SetSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)


    const randomNumber = (min , max) => {
       
        return Math.floor(Math.random() *(max - min) + min)
    }

    const resetScore = () => {
        setScore(0);
    };

    const roleDice = () => {
       if (!selectedNumber){
        setError("You Have Not Selected Any No.")
        return; } 
        
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
        error = {error}
        setError = {setError}
        selectedNumber= {selectedNumber}
        SetSelectedNumber= {SetSelectedNumber}
        />
        </div>

        <RollDice
        currentDice = {currentDice}
        roleDice = {roleDice}
        />
        <div className="btns">
            <OutlineButton onClick = {resetScore} >Reset</OutlineButton>
            <Button onClick = {() => {
                setShowRules(prev => !prev )
            }}> {showRules ? "Hide" : "Show"}  Rules</Button>
        </div>

        {showRules && <Rules/>}
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
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`