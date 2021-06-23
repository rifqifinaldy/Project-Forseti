import React from 'react';
import styled from "styled-components";

const TextWrapper = styled.div`
    /* max-width: 540px; */
    padding-top: 0;
    padding-bottom: 60px;
`

const Description = styled.p`
    color:#fff;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Header = styled.h1`
    margin-bottom: 18px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:#fff;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

const Subtitle = styled.p`
    opacity : 0.6;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`

export const Border = styled.div`
    width: 48px;
    height: 4px;
    margin-bottom: 18px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    background-color: #317481;
`


const TitleSubtitle = ({header, subtitle, description}) => {
    return (
        <>
        <TextWrapper>
            <Header>
                {header}
            </Header>

            <Subtitle>
                {subtitle}
            </Subtitle>

            <Border>
            </Border>

            <Description>
                {description}
            </Description>
        </TextWrapper>
        </>
    )
}

export default TitleSubtitle
