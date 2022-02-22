import React, { useState } from 'react';
import Switch from './Switch';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const Inner = () => {
    const [theme, setTheme] = useState('light');

    const isOn = (to) => {
        if (to) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <Container light={theme === 'light'}>
            <Switch theme={theme} isOn={isOn} />
            <UnderTitle>
                <UnderTitleH3>"한번 할 때 후회하지 않도록"</UnderTitleH3>
            </UnderTitle>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({ light }) => light ? palette.background : palette.black1};
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    color: ${({ light }) => light ? 'black' : 'white'};
    z-index: -1; 
    top: 0; left: 0;
    max-width: 100%; width: 100vw; height: 100vh;
    transition: 0.4s all cubic-bezier(0.65, 0, 0.35, 1); 
    padding: 15vh 0;
`;

const UnderTitle = styled.div`
    display: flex; flex-direction: column;
    align-items: center; justify-content: space-evenly;
    letter-spacing: 7px;
    text-align: center;
    padding-top: 40px;
`;

const UnderTitleH3 = styled.h3`
    font-size: 1.3rem;
    margin-top: 40px;
    
    ${device.tablet} {
        display: none;
        margin-top: 0px;
        font-size: 1rem;
    }
`;

export default Inner;