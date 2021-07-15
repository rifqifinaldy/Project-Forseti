import React, { useEffect } from 'react';
import {Header, Border, Subtitle} from '../TitleSubtitle';
import Aos from 'aos';
import "aos/dist/aos.css";
import styled from "styled-components";
import MoveStuffAround from '../Ticker';

const AboutContainer = styled.div`
    color: #fff;
    align-items: center;
    background : #010606;
    padding: 48px 80px;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

const DescriptionWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

const DescriptionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
    }
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({left}) => (left ? 'col2' : 'col1')};
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({left}) => (left ? 'col1' : 'col2')};
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: center;
`;

const AboutDescription = styled.p`
    font-size: 18px;
    text-align: ${({left}) => (left ? 'left' : 'center')};
`;

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

function About({abouts}) {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
            mirror: true,
        });
    }, [])
    return (
        <AboutContainer id="about">
                <MoveStuffAround />
                    <Header data-aos="fade-up">About Us</Header>
                    <Border data-aos="flip-left"></Border>
                    <DescriptionWrapper>
                    {abouts.map((about,index) => {
                        return (
                        <DescriptionRow key={index} imgStart={about.imgStart}>
                                <Column1 left={about.left}>
                                    <TextWrapper>
                                        <Subtitle data-aos="slide-up">
                                            {about.subtitle}
                                        </Subtitle>
                                        <Border data-aos="flip-left"></Border>
                                        <AboutDescription data-aos="zoom-in-up">
                                            {about.description}
                                        </AboutDescription>
                                    </TextWrapper> 
                                </Column1>
                                <Column2 left={about.left} data-aos="zoom-out-down">
                                    <ImgWrap>
                                    <Img src={about.img}/>
                                    </ImgWrap>
                                </Column2>
                        </DescriptionRow>
                        )
                    })}
                    </DescriptionWrapper>
            </AboutContainer>
    )
}

export default About
