import React from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';



const TickerFont= styled.p`
    color: #317481;
`
 
const MoveStuffAround = () => (
    <Ticker>
        {({ index }) => (
            <TickerFont>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </TickerFont>
        )}
    </Ticker>
)
 
export default MoveStuffAround