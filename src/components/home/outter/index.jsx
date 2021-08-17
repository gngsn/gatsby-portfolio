import React from 'react';
import Bubble from './Bubble';
import Skill from './Skill';
import Contact from './Contact';
import useTheme from '../../../lib/hooks/useTheme';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';



const Bottom = () => {
    const { theme } = useTheme();
    
    return (
        <>
        <Container>
            <Bubble />
                <img src={theme === 'light' ? `/img/working.jpg` : '/img/working.png'} />
            <Skill />
            <hr />
            <Contact />
        </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 99.5vh; z-index: 3; overflow-x: hidden;
    background-color: ${palette.grey0};
    & > img { width: 100%;}
    & > div { padding: 80px 0px; margin: auto;text-align: center;}
    hr { width: 160px; margin-bottom: 110px;}
    @media (max-width:820px) {
        & > div{padding: 0px 10px;}
    }
`;

export default Bottom;