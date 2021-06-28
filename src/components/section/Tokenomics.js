import React from 'react';
import {Header, Border} from '../TitleSubtitle';
import styled from 'styled-components';
import backgroundImg from '../../images/background/bg-3.jpg';

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
    }
`;

const TokenomicsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
`;

const TokenExample = styled.div `
    background: rgba(49,116,129, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10%;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(255,255,255,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const TokenList = styled.ul`
    list-style-type: none;
`

const TokenListItem = styled.li`
    margin-bottom: 0.5em;
`

const TokenGraph = styled.div `

`



const Tokenomics = ( {tokenCards} ) => {

    return (
        <>
            <TokenomicsContainer lightBg="true" id="tokenomics">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180.36068725585938"><path fill="#317481" fillOpacity="0.7" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <TokenomicsContent>
                        <Header>
                            Tokenomics
                        </Header>
                        <Border>
                        </Border>
                        <TokenomicsWrapper>
                            <TokenExample>
                                {tokenCards.map((tokenCard, index) => {
                                    return (
                                        <TokenList key={index}>
                                            <TokenListItem>
                                                Token Name : {tokenCard.token_name}
                                            </TokenListItem>
                                            <TokenListItem>
                                                Token Name : {tokenCard.symbol}
                                            </TokenListItem>
                                            <TokenListItem>
                                                Total Supply : {tokenCard.total_supply}
                                            </TokenListItem>
                                            <TokenListItem>
                                                Decimal : {tokenCard.decimal}
                                            </TokenListItem>
                                            <TokenListItem>
                                                Jaringan : {tokenCard.jaringan}
                                            </TokenListItem>
                                        </TokenList>
                                    )
                                })}
                            </TokenExample>
                            <TokenGraph>
                                TOKEN GRAPH
                            </TokenGraph>
                        </TokenomicsWrapper>       
                </TokenomicsContent>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#317481" fillOpacity="0.7" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </Wave>
                
            </TokenomicsContainer>
        </>
    );
}

export default Tokenomics
