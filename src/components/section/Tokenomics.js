import React, {useEffect} from 'react';
import {Header, Border, Subtitle} from '../TitleSubtitle';
import styled from 'styled-components';
import Rocket from '../../images/tokenomics/rocket.png';
import Moon from '../../images/tokenomics/Moon.svg';
import star from '../../images/tokenomics/background.gif';
import { motion, AnimatePresence } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css";

const Wave = styled.div`
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 200;
`;

const TokenomicsContainer = styled.div`
    background-image: url(${star});
    background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
    z-index : -3;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px){
        padding-top: 50px;
    }
`;

const SubHeader = styled.h2 `
    text-align: center;
    color : #fff;
    opacity: 0.7;
    font-weight : 500;
    margin-bottom: 0.5em;
    margin-top: -0.6em;
`;

const SupplyHeader = styled.h2`
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 28px;
`;

const TotalSupply = styled.span`
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    margin-left: 0.5em;
`;

const TokenSupply = styled.span`
    color: #DAA520;
    text-align: center;
    font-weight: 700;
    margin-left: 0.5em;
    margin-bottom: 20px;
    transition: 0.2s ease-in;
    font-size: 32px;

    &:hover {
        color : #317481;
        /* transform: scale(1.05); */
    }
`;

const TokenomicsContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        width: 100%;
        padding : 0;
    }
`;

const ImgWrapper = styled(motion.div)`
    max-width: 200px;
    position: absolute;
    @media screen and (max-width: 768px){
        max-width:150px;
    }
    @media screen and (max-width: 572px){
        max-width:100px;
    }
    @media screen and (max-width: 420px){
        max-width:50px;
        margin-top: 10vh;
    }
    @media screen and (max-width: 380px){
        margin-top: 15vh;
        margin-left : 50px;
        left: 0;
    }
`;

const RocketImg = styled(motion.img)`
    width: 100%;
    transform: rotate(50deg);
`;

const TokenomicsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 100px;
    @media screen and (max-width: 768px){
        margin-left:55px;
    }
    @media screen and (max-width: 572px){
        margin-left:30px;
    }
    @media screen and (max-width: 380px){
        margin-left : 35px;
    }
`;

const MoonImg = styled.img`
    width:100%;
`;

const Tokenomics = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            mirror: false,
        });
    }, [])
    return (
        <>
            <TokenomicsContainer lightBg="true" id="tokenomics">
            
                <TokenomicsContent>
                        <Header data-aos="fade-up">
                            Tokenomics
                        </Header>
                        <ImgWrapper
                        initial={{y:0}}
                        animate={{y: -50 }}
                        transition={{duration: 3, 
                            repeat: Infinity,
                            repeatType : "mirror",}}>
                            <RocketImg src={Rocket} alt="Forseti To The Moon"
                            />
                        </ImgWrapper>
                        <SubHeader data-aos="slide-up">(To The Moon)</SubHeader>
                        <Border>
                        </Border>
                        <SupplyHeader data-aos="fade-up">
                            Total Supply : 
                            <TotalSupply>10.000.000</TotalSupply>
                        <br /> Symbol :
                        <TokenSupply data-aos="fade-up">
                             SETI
                        </TokenSupply>
                        </SupplyHeader>
                        
                        <TokenomicsWrapper data-aos="fade-up">
                            <MoonImg src={Moon}/>
                        </TokenomicsWrapper>       
                </TokenomicsContent>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </Wave>
            </TokenomicsContainer>
        </>
    );
}

export default Tokenomics
