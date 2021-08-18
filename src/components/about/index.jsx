import React from 'react';
import Switch from './Switch';
import styled from 'styled-components';
import useTheme from '../../lib/hooks/useTheme';
import palette from '../../lib/styles/palette';

const Inner = () => {
    const { theme, setTheme } = useTheme();

    const isOn = (to) => {
        if (to) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <Container>
            <Switch theme={theme === 'light'} setTheme={setTheme} isOn={isOn} />
            <UnderTitle>
                <UnderTitleH3>"어차피 할 거, 후회하지 않도록"</UnderTitleH3>
                <UnderTitleSpan />
            </UnderTitle>
        </Container>
    )
}

const Container = styled.div`
    // background-color: ${palette.black1};
    z-index: -1; top: 0; left: 0;
    width: 100%; height: 100vh; 
    transition: 0.8s transform cubic-bezier(0.65, 0, 0.35, 1); 
    padding-top: 20vh;
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

const UnderTitleSpan = styled.span`
    width: 400px;
    margin-top: 30px;
    opacity: .4;
    position: absolute;
    display: inline-block;
    z-index: -1;
    transform: rotate(-1deg);
    border-bottom: 3px solid #dd4226;
    @media all and (max-width: 900px) {
        width: 350px;
    }
`;

export default Inner;