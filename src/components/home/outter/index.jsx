import React from 'react';
import styled from 'styled-components';

import Bubble from './Bubble';
import Skill from './Skill';
import Contact from './Contact';
import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';

const Bottom = () => {
    return (
        <>
        <Container>
            <Bubble />
            <Skill />
            <hr />
            <Contact />
        </Container>
        </>
    )
}

const Container = styled.div`
    border-top: 2px solid black;
    margin-top: 99vh; z-index: 3; 
    
    background-color: ${palette.white0};
    position: relative;
    & > img { width: 100%;}
    & > div { 
        overflow-x: hidden;
        padding: 80px 0px; 
        margin: auto;
        text-align: center;
    }
    hr { width: 160px; margin-bottom: 110px;}
    &:before {
        position: absolute;
        content: 'scroll up ! ';
        font-size: 1.5rem;
        color: ${palette.red1};
        left: 50%; transform: translateX(-50%);
        top: -3rem;
        ${device.tablet} {
            font-size: 1rem;
            top: -2rem;
        }
    }
`;

export default Bottom;