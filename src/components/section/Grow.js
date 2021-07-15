import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Header, Border } from '../TitleSubtitle';
import Aos from 'aos';
import "aos/dist/aos.css";

const GrowContainer = styled.div`
    color: #fff;
    align-items: center;
    background : ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px){
        padding-top: 50px;
    }
`;

const Wave = styled.div`
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    line-height: 0;
`;

const GrowDescription = styled.p`
    font-size: 18px;
    text-align: center;
`

const GrowContent = styled.div `
    max-width: 1500px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px){
        padding: 50px 30px;
    }
`;

const GrowRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2 col2' 'col1 col1';
    }
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

const GrowImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

const GrowImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;


const Grow = ({Grows}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, [])
    return (
        <GrowContainer>
            <GrowContent>
                <Header data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                    How We Grow 
                </Header>
                <Border data-aos="flip-left" data-aos-offset="200" data-aos-delay="500"></Border>
                {Grows.map((Growdata, index) => {
                    return (
                    <GrowRow key={index}>
                        <Column1 data-aos="fade-left" data-aos-offset="200" data-aos-delay="500">
                            <GrowDescription>
                                {Growdata.description}
                            </GrowDescription>
                        </Column1>    
                        <Column2 data-aos="fade-right" data-aos-offset="200" data-aos-delay="500">
                            <GrowImageWrapper>
                                <GrowImg src={Growdata.img} />
                            </GrowImageWrapper>
                        </Column2>  
                    </GrowRow>
                    )
                })}
            
            </GrowContent>
            {/* <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#317481" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </Wave> */}
            
        </GrowContainer>
    )
}

export default Grow
