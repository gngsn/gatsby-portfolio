import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const Music = () => {

    return (
        <Container>
            <Block>I can now be moved around!</Block>
        </Container>
    )
}

const Container = styled(Draggable)`
    position: fixed;
`;

const Block = styled.div`
    position: fixed;
    cursor: none;
    border-bottom: 1px solid #000;
    z-index: 10;
    background-color: ${palette.black0};
    display: flex; 
    bottom: 0%; 
    width: 100px; 
    height: 100px; 
    ${device.mobile} {
        flex-wrap: wrap;
    }
`;


export default Music;