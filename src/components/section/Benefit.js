import React from 'react'
import { Cards } from '../Card'
import { Header } from '../TitleSubtitle'
import { Border } from '../TitleSubtitle';
import styled from "styled-components";
import img from "../../images/background/bg-1.jpg"

const Wave = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 1;
`

const BenefitContainer = styled.div`
    background-color: #010606;
    z-index : 1;
    width: 100%;
    position: relative;
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

const BenefitBg = styled.div`
    background-image: url(${img});
    z-index : -3;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 0 0 20% 20%;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 768px){
        border-radius: 0 0 0 0;
    }
`;

const BenefitContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        padding: 0 60px;
    }
`;

const BenefitList=styled.ol`
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    display: flex;
    align-self: center;

`

const BenefitItems = styled.li`
    color : #fff;
    margin-bottom: 0.5em;
`

const BenefitCards =styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding: 0 0;
    }
`;

const Benefit = ({benefits}) => {
    return (
        <>
            <BenefitContainer id="benefit">
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010606" fillOpacity="0.1" d="M0,256L60,234.7C120,213,240,171,360,133.3C480,96,600,64,720,85.3C840,107,960,181,1080,218.7C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                </svg>
                </Wave>
                <BenefitBg>
                </BenefitBg>
                <BenefitContent>
                    <Header>What's The Benefit</Header>
                    <Border>
                    </Border>
                    <BenefitList>
                        {benefits.map((benefit,index) => {
                            return (
                                <BenefitItems key={index}>
                                 {benefit.description}
                            </BenefitItems>
                            )
                        })}
                    </BenefitList>
                    <BenefitCards>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </BenefitCards>
                </BenefitContent>
            </BenefitContainer>
        </>
    )
}

export default Benefit
