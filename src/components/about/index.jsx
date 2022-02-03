import React, { useState } from 'react';
import Switch from './Switch';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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
    background-color: ${({ light }) => light ? palette.white0 : palette.black1};
    color: ${({ light }) => light ? 'black' : 'white'};
    z-index: -1; top: 0; left: 0;
    width: 100%; 
    transition: 0.8s transform cubic-bezier(0.65, 0, 0.35, 1); 
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
    font-family: 'Noto L';
    font-size: 1.3rem;
    margin-top: 40px;
    @media all and (max-width: 900px) {
        font-size: 1rem;
    }
`;

export default Inner;