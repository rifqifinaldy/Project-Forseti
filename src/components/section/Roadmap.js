import React from 'react';
import styled from 'styled-components'
import { Header,Border } from '../TitleSubtitle';
import Timeline from '../Timeline';
import { roadmapData } from '../../data/RoadmapData';
import img from "../../images/background/bg-1.jpg"

const RoadmapContainer = styled.div`
    color: #fff;
    align-items: center;
    background : #010606;
    

    @media screen and (max-width: 768px){
        
    }
`;

const Wave = styled.div`
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    line-height: 0;
`;

const RoadmapContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    height: 480px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const RoadmapBg = styled.div`
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

function Roadmap({Roadmaps}) {
    return (
        <RoadmapContainer id="roadmap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180.36068725585938"><path fill="#317481" fillOpacity="0.7" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
           <RoadmapBg>

           </RoadmapBg>
           <RoadmapContent>
                <Header>
                    Road Map
                </Header>
                <Border></Border>
                <Timeline  Roadmaps={roadmapData}/>
           </RoadmapContent>
           <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#317481" fillOpacity="0.7" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </Wave>
        </RoadmapContainer>
    )
}

export default Roadmap
