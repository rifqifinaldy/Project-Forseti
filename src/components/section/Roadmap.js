import React from 'react';
import styled from 'styled-components'
import { Header,Border } from '../TitleSubtitle';
import Timeline from '../Timeline';
import { roadmapData } from '../../data/RoadmapData';

const RoadmapContainer = styled.div`
    color: #fff;
    align-items: center;
    background : #010606;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

const RoadmapContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

function Roadmap({Roadmaps}) {
    return (
        <RoadmapContainer id="roadmap">
           <RoadmapContent>
                <Header>
                    Road Map
                </Header>
                <Border></Border>
                <Timeline  Roadmaps={roadmapData}/>
           </RoadmapContent>
        </RoadmapContainer>
    )
}

export default Roadmap
