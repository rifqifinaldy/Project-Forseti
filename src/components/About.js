import React from 'react'
import { Button } from './Button'
import TitleSubtitle from './TitleSubtitle'
import { aboutData } from '../data/AboutData'
import styled from "styled-components";
import MoveStuffAround from './Ticker';

const AboutContainer = styled.div`
    color: #fff;
    align-items: center;
    background : ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

const AboutContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px){
        padding: 0 30px;
    }
`

const About = ({ lightBg, id}) => {
    
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <MoveStuffAround />
                <AboutContent>
                    <TitleSubtitle {...aboutData}/>
                    
                    <Button to="/" primary='true'>About Button</Button>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default About
