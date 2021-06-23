import React from 'react';
import TitleSubtitle from './TitleSubtitle';
import { Button } from './Button';
import { tokenomicsData } from '../data/TokenomicsData';
import styled from 'styled-components';


const Wave = styled.div`
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 200;
`;

const TokenomicsContainer = styled.div`
    color: #fff;
    align-items: center;
    background : ${({lightBg}) => (lightBg ? '#010606' : '#fff')};
    
    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
`;

const TokenomicsContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        padding: 50px 20px;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;


const Tokenomics = ( {id} ) => {
    return (
        <>
            <TokenomicsContainer lightBg="true" id={id}>
                
                <TokenomicsContent>
                    <TitleSubtitle {...tokenomicsData} />
                    <BtnWrap>
                        <Button to='/' primary="false">Tokenomics</Button>
                    </BtnWrap>           
                </TokenomicsContent>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="0.7" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
                </svg>
                </Wave>
                
            </TokenomicsContainer>
        </>
    );
}

export default Tokenomics
