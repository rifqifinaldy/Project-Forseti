import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Header, Border, Description, Subtitle } from '../TitleSubtitle';
import { Button } from '../Button';
import img from "../../images/background/bg-3.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";

const PuchaseContainer = styled.div`
background-image: url(${img});
    background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
    z-index : 1;
    width: 100%;
    color: #fff;
    @media screen and (max-width: 768px){
        padding: 0 0;
    }
`;

const TopWave = styled.div`
    margin-top: -4px;
    width: 100%;
    z-index: 200;
`

const Wave = styled.div`
    bottom: 0;
    left: 0;
    margin-bottom: -0.5em;
    width: 100%;
    z-index: 200;
`;

const PuchaseBg = styled.div `
    
    z-index : -3;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 0 0 5% 5%;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 768px){
        border-radius: 0 0 0 0;
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
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
    }
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
    background: rgba(0,0,0, 0.5);
    display : flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10%;
    box-shadow: rgba(255, 255, 255, 0.2)0px 1px 3px;
    transition: all 0.2s ease-in-out;
`;

const ContentListWrapper = styled.div`

`;

const ContentList = styled.ul`
    list-style-type :  ${({none}) => (none ? 'none' : 'circle')};
    align-self: flex-start;
`;

const ContentListItem = styled.li`
    margin: 0.5em 0;
`;

const Puchase = ({puchases}) => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
            mirror: true,
        });
    }, [])
    return (
        <PuchaseContainer id="puchases">
            <TopWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180.36068725585938"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </TopWave>
            <PuchaseBg></PuchaseBg>
            <PuchaseContent>
                <Header data-aos="fade-down" data-aos-offset="200" data-aos-delay="500">
                    Puchase Now
                </Header>
                <Border data-aos="flip-left"></Border>
                <Description data-aos="fade-down" data-aos-offset="200" data-aos-delay="500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis voluptatum doloremque dolor sequi debitis iste, velit nulla nostrum hic. Repellat molestiae voluptatibus nihil? Laudantium earum praesentium, animi voluptatum autem similique?
                </Description>
                <PuchaseRow>
                    <Column1>
                        <h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">Presale</h1>
                        
                        <Subtitle data-aos="fade-right" data-aos-offset="200" data-aos-delay="500">
                            Before Pre-Sale
                        </Subtitle>
                        <ContentList data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" none={false}>
                            <ContentListItem>
                                Buy BNB
                            </ContentListItem>
                            <ContentListItem>
                                Wait for the pre-sale to start
                            </ContentListItem>
                        </ContentList>
                        <Button data-aos="fade-right" data-aos-offset="200" data-aos-delay="500" to="/" primary="true">BUY BNB</Button>
                        <Subtitle data-aos="fade-left" data-aos-offset="200" data-aos-delay="500">
                            During Pre-Sale
                        </Subtitle>
                        <ContentList data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" none={false}>
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
                        <Subtitle data-aos="fade-left" data-aos-offset="200" data-aos-delay="500">
                            After Pre-Sale
                        </Subtitle>
                        <ContentList data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" none={false}>
                            <ContentListItem>
                                Token will distribute to your wallet after the pre-sale
                            </ContentListItem>
                        </ContentList>
                    </Column1>
                    <Column2>
                        <PuchaseWrapper data-aos="fade-up" data-aos-offset="700" data-aos-mirror="true" data-aos-once="false">
                            <Subtitle>Forseti</Subtitle>
                            <Border></Border>
                            
                                {puchases.map((puchase, index) => {
                                    return (
                                        <ContentListWrapper key={index}>
                                            <ContentList none={true}>
                                                <ContentListItem>
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
                                            <Button to="/" primary="true">Unlock Wallet</Button>
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
                                        </ContentListWrapper>
                                    )
                                })}
                                
                            
                        </PuchaseWrapper>
                    </Column2>
                </PuchaseRow>
            </PuchaseContent>
            <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </Wave>
        </PuchaseContainer>
    )
}

export default Puchase

