import React from 'react'
import { Border } from './TitleSubtitle'

import styled from "styled-components";

const Card =styled.div`
    background: rgba(0,0,0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 30px;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

// export const CardIcon = styled.img`
//     height: 160px;
//     width: 160px;
//     margin-bottom: 10px;    
// `

const CardH2 = styled.h2`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 10px;
`

const CardP = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`

export const Cards = () => {
    return (
        <>
            <Card>
                <CardH2>Card Title</CardH2>
                <Border />
                <CardP>Card Paragraph</CardP>
            </Card>
        </>
    )
}
