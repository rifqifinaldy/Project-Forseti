import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const TickerContainer = styled.h4`
    color: #010606;
    opacity : 0.7;
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