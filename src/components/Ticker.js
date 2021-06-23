import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const TickerContainer = styled.h4`
    color: #fff;
    opacity : 0.3;
    text-shadow: 4px 4px 0px #317481;
    mix-blend-mode: screen;
`
 
const MoveStuffAround = () => (
    <Ticker>
        {({ index }) => (
            <TickerContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas.{index}!
            </TickerContainer>
        )}
    </Ticker>
)
 
export default MoveStuffAround