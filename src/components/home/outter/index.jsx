import React from 'react';
import styled from 'styled-components';

import Bubble from './Bubble';
import Skill from './Skill';
import Contact from './Contact';
import useTheme from '../../../lib/hooks/useTheme';
import palette from '../../../lib/styles/palette';

const Bottom = () => {
    const { theme } = useTheme();
    
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
    margin-top: 99vh; z-index: 3; overflow-x: hidden;
    background-color: ${palette.white0};
    & > img { width: 100%;}
    & > div { padding: 80px 0px; margin: auto;text-align: center;}
    hr { width: 160px; margin-bottom: 110px;}
    @media (max-width:820px) {
        & > div{padding: 0px 10px;}
    }
`;

export default Bottom;