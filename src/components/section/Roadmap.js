import React, {useEffect} from 'react';
import styled from 'styled-components'
import { Header,Border } from '../TitleSubtitle';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import shuttle from '../../images/roadmap/astronaut.png';
import { motion, AnimatePresence } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css";
import img from "../../images/background/bg-1.jpg";

const RoadmapContainer = styled.div`
    color: #fff;
    align-items: center;
    background : #010606;
    border-bottom: 1px solid #317481;
    @media screen and (max-width: 768px){
        padding-top: 20px;
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
    @media screen and (max-width: 768px){
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding : 48px 0;
    }
`;

const TimelineDate = styled.h3`
    color : #317481;
    float : right;
    margin-right: 1em;
    margin-left: 1em;
`;

const TimelineSubtitle = styled.h3`
    opacity : 0.7;
    color: #317481;
    margin-bottom: 20px;
`;

const TimelineDescription = styled.p`
    color : #010606;
`;

const RoadmapIllustrationWrapper= styled(motion.div)`
    max-width: 300px;
    top: 40%;
    height: 100%;
    position: absolute;
`;

const RoadmapIllustration = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

function Roadmap({Roadmaps}) {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            mirror: false,
        });
    }, [])
    return (
        <RoadmapContainer id="roadmap">
           <RoadmapContent>
                <Header data-aos="fade-up">
                    Road Map
                </Header>
                <Border data-aos="flip-left"></Border>
                <RoadmapIllustrationWrapper initial={{y:0}}
                        animate={{y: -10 }}
                        transition={{duration: 1, 
                            repeat: Infinity,
                            repeatType : "mirror",}}>
                    <RoadmapIllustration src={shuttle}/>
                </RoadmapIllustrationWrapper>
                <Timeline lineColor={'#317481'}>
                {Roadmaps.map((Roadmap, index) => {
                    return (
                        <TimelineItem
                            key={index}
                            style={{ color: '#317481' }}
                            dateComponent={(
                                <TimelineDate>{Roadmap.date}</TimelineDate>
                            )}
                            bodyContainerStyle={{
                                background: 'rgba(255,255,255, 0.8)',
                                padding: '15px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                            animate={ false}
                            >
                            <TimelineSubtitle>{Roadmap.subtitle}</TimelineSubtitle>
                            <TimelineDescription>{Roadmap.description}</TimelineDescription>
                        </TimelineItem>
                    )
                })}
                </Timeline>
                
            </RoadmapContent>
            
            </RoadmapContainer>
    )
}

export default Roadmap
