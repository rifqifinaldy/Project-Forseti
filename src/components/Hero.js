import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components/macro'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import Herologo from '../images/logo/logo.png';
import IntroBg from '../images/hero/10.jpg';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 12;
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 100px;
    justify-content: ${({ justify }) => (justify ? 'left' : 'center') };

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
             rgba(0,0,0,0.2) 0%, 
             rgba(0,0,0,0.2) 50%,
             rgba(0,0,0,0.6) 100%)
    }

    @media screen and (max-width: 768px){
        padding: 50px;
    }
`;
const HeroImage = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 14;
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => (align ? 'left' : 'center') };
    max-width: 366px;
    color: #fff;

`;

const Quotes = styled(motion.h1)`
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: capitalize;
    text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
`

const Author = styled(motion.p)`
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
`

const BtnWrap = styled(motion.div)`

`

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 20px;
    right: auto;
    display: flex;
    z-index: 20;
    @media screen and (max-width: 962px){
        right: 20px;
    }

    @media screen and (max-width: 962px){
        left: 20px;
    }
`;

const Forsetilogo = styled(motion.img)`
    display: flex;
    align-items: center;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #E8F0F2;
    cursor: pointer;
    background: #131313;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #317481;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

function Hero({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current ===length - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 10000)

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     }git remote add origin https://github.com/rifqif-socketspace/forseti.git
    // }, [current, length])

    const nextSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current);
    }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current);
    }
        setCurrent(current === 0 ? length -1 : current -1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    if (current === length-length){
        return (
            <HeroSection>
                <HeroWrapper>
                    <HeroSlide>
                        <HeroSlider>
                            <HeroImage transition={{duration:1}} initial={{opacity:0}} animate={{opacity:1}} src={IntroBg} />
                            <HeroContent>
                                <Forsetilogo transition={{delay : 1, duration:2}} initial={{opacity:0, y:-300}} animate={{opacity:1, y:0}} src={Herologo} />
                                <Author transition={{delay: 3, duration:2}} initial={{opacity:0}} animate={{opacity:1}}>Coming Soon</Author>
                                <BtnWrap transition={{delay: 3, duration:2}} initial={{opacity:0}} animate={{opacity:1}}>
                                    <Button 
                                    to="/" 
                                    primary='true'
                                    css={`max-width:160px;`}>
                                    Coming Soon  <Arrow />
                                    </Button>
                                </BtnWrap>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
                
                </HeroWrapper>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010606" fillOpacity="0.6" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                </Wave>
            </HeroSection>
        )
    }
    return (
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index}>
                        {index === current && (
                        <HeroSlider justify='true'>
                            <HeroImage transition={{duration:1}} initial={{opacity:0}} animate={{opacity:1}} src={slide.image} alt={slide.alt}/>
                            <HeroContent align='true'>
                                <Quotes transition={{duration:2}} initial={{opacity:0}} animate={{opacity:1}}>{slide.quotes}</Quotes>
                                <Author transition={{duration:2}} initial={{opacity:0}} animate={{opacity:1}}>{slide.author}</Author>
                                <BtnWrap transition={{duration:2}} initial={{opacity:0}} animate={{opacity:1}}>
                                    <Button 
                                    to={slide.path} 
                                    primary='true'
                                    css={`max-width:160px;`}>
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </BtnWrap>
                            </HeroContent>
                        </HeroSlider>
                        )}
                    </HeroSlide>
                );
            })};
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
            <Wave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#010606" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </Wave>
        </HeroSection>
    )
}

export default Hero
