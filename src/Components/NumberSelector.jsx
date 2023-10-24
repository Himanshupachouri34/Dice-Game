import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({ selectedNumber , SetSelectedNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];



    return (
        <BoxContainer>

            <div className='flex'>
                {
                    arrNumber.map((value, index) =>
                        <Box
                            isSelected={value === selectedNumber}
                            key={index}
                            onClick={() => SetSelectedNumber(value)}>
                            {value}
                        </Box>
                    )
                }
            </div>
            <p> Select Number </p>
        </BoxContainer>
    )
}

export default NumberSelector

const BoxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 25px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
`

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => !props.isSelected ? "black" : "white"};
`