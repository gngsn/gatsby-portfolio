import React from 'react';
import styled from 'styled-components';

import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';
import Bubble from './Bubble';
import Contact from './Contact';
import Skill from './Skill';

const Bottom = () => {
    return (
        <>
        <Container>
            <Bubble />
            <Skill />
            <Contact />
        </Container>
        </>
    )
}

const Container = styled.div`
    cursor: none;
    border-top: 1px solid #d3d3d3;
    margin-top: 100vh; 
    z-index: 2;
    
    background-color: ${palette.background};
    position: relative;
    & > img { width: 100%;}
    & > div { 
        overflow-x: hidden;
        padding: 70px 0px 90px; 
        margin: auto;
        text-align: center;
    }
    &:before {
        position: absolute;
        content: 'scroll up !';
        font-size: 1.2rem;
        color: ${palette.black0};
        left: 50%; transform: translateX(-50%);
        top: -3rem;
        ${device.tablet} {
            font-size: 1rem;
            top: -2rem;
        }
    }
`;

export default Bottom;