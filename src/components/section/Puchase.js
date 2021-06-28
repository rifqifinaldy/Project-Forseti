import React from 'react'
import styled from 'styled-components';
import {Header, Border, Description, Subtitle } from '../TitleSubtitle';
import { Button } from '../Button';

const PuchaseContainer = styled.div`
   color: #fff;
    align-items: center;
    background :#010606;
    
    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
`;

const PuchaseContent = styled.div `
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

const PuchaseRow = styled.div`
    display : grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "col1 col2";
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
    text-align: left;
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col2;
`;

const PuchaseWrapper = styled.div`
    background: rgba(49,116,129, 0.3);
    display : flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10%;
    box-shadow: rgba(255, 255, 255, 0.2)0px 1px 3px;
    transition: all 0.2s ease-in-out;
`;

const ContentList = styled.ul`
    list-style-type :  ${({none}) => (none ? 'none' : 'circle')};
    align-self: flex-start;
`;

const ContentListItem = styled.li`
    margin: 0.5em 0;
`;

const Puchase = ({puchases}) => {
    return (
        <PuchaseContainer id="puchases">
            <PuchaseContent>
                <Header>
                    Puchase Now
                </Header>
                <Border></Border>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatum doloremque dolor sequi debitis iste, velit nulla nostrum hic. Repellat molestiae voluptatibus nihil? Laudantium earum praesentium, animi voluptatum autem similique?
                </Description>
                <PuchaseRow>
                    <Column1>
                        <h1>Presale</h1>
                        
                        <Subtitle>
                            Before Pre-Sale
                        </Subtitle>
                        <ContentList none={false}>
                            <ContentListItem>
                                Buy BNB
                            </ContentListItem>
                            <ContentListItem>
                                Wait for the pre-sale to start
                            </ContentListItem>
                            <Button to="/" primary={true}>BUY BNB</Button>
                        </ContentList>
                        
                        <Subtitle>
                            During Pre-Sale
                        </Subtitle>
                        <ContentList none={false}>
                            <ContentListItem>
                                While the sale is live, press the contribute button and input the amount of BNB
                            </ContentListItem>
                            <ContentListItem>
                                Confirm the transaction in your wallet
                            </ContentListItem>
                            <ContentListItem>
                                Min amount 0.1 BNB
                            </ContentListItem>
                            <ContentListItem>
                                Max Amount 7 BNB
                            </ContentListItem>
                        </ContentList>
                        <Subtitle>
                            After Pre-Sale
                        </Subtitle>
                        <ContentList none={false}>
                            <ContentListItem>
                                Token will distribute to your wallet after the pre-sale
                            </ContentListItem>
                        </ContentList>
                    </Column1>
                    <Column2>
                        <PuchaseWrapper>
                            <Subtitle>Forseti</Subtitle>
                            <Border></Border>
                            
                                {puchases.map((puchase, index) => {
                                    return (
                                        <>
                                            <ContentList none={true}>
                                                <ContentListItem key={index}>
                                                    Price : {puchase.price}
                                                </ContentListItem>
                                                <ContentListItem>
                                                    Price : {puchase.bnb_raised}
                                                </ContentListItem>
                                                <ContentListItem>
                                                    Soft Cap (400 BNB) : {puchase.soft_cap}
                                                </ContentListItem>
                                                <ContentListItem>
                                                    Hard Cap (2000 BNB) : {puchase.hard_cap}
                                                </ContentListItem>
                                            </ContentList>
                                            <Button primary={true}>Unlock Wallet</Button>
                                            <ContentList none={true}>
                                                <ContentListItem>
                                                    For Sale : {puchase.for_sale}
                                                </ContentListItem>
                                                <ContentListItem>
                                                    Max Contribution : {puchase.max_contribution}
                                                </ContentListItem>
                                                <ContentListItem>
                                                    Min Contribution : {puchase.min_contribution}
                                                </ContentListItem>
                                            </ContentList>
                                        </>
                                    )
                                })}
                                
                            
                        </PuchaseWrapper>
                    </Column2>
                </PuchaseRow>
            </PuchaseContent>
        </PuchaseContainer>
    )
}

export default Puchase

