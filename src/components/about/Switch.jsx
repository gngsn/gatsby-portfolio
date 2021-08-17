import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

import styled from 'styled-components';

const Inner = React.memo(({ theme, isOn }) => {
    let [turnOn, setTurnOn] = useState(theme);
    const audio = new Audio('/img/switch.mp3');

    const clickSwitch = () => {
        audio.play();
        isOn(!turnOn);
        setTurnOn(!turnOn);
    }

    // const setSwitch = e => {
    //     clickSwitch();
        
    //     if (turnOn !== theme)
    //         isOn(turnOn);
    // }
    
    // useEffect(() => {
    //     setTurnOn(theme);
    // }, [theme]);

    
    return (
        <Container container className="switch">
            <Grid item xs={4}>
                {
                    turnOn ?
                        <OnOffText><em>ON/</em>OFF</OnOffText> :
                        <OnOffText>ON<em>/OFF</em></OnOffText>
                }
                <SmallText className="caption">"push the switch"</SmallText>
            </Grid>
            <Grid item xs={4}>
                <SwitchImage alt="switch" onClick={clickSwitch} className="link switch" id="switch" src={turnOn ? '/img/switch-on.png' : '/img/switch-off.png'} />
            </Grid>
            <Grid>
                <RightText item xs={4}>
                    <AnimationTextBox className={classNames('rightText', { '--active': turnOn })} >
                        <h2> 어울릴 땐,</h2>
                        <h3>최고의 화합을</h3>
                    </AnimationTextBox>
                    <AnimationTextBox className={classNames('rightText', { '--active': !turnOn })}>
                        <h2> 개발할 땐,</h2>
                        <h3>깊은 집중을</h3>
                    </AnimationTextBox>
                </RightText>
            </Grid>
        </Container>
    )
}, (prev, next) => {
    return prev.theme === next.theme;
});


const Container = styled(Grid)`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-evenly;
    padding-top: 30px;
    max-width: 850px;
    margin: auto;
    
    h2, h2 em {
        font-family: 'Noto Th';
        font-size: 2.2rem;
    }
    h3, h3 em {
        font-family: 'Noto B';
        font-size: 2.5rem;
    }

    & {
        MuiGrid-root {
            width: 100%;
        }
    }
    @media all and (max-width: 900px) {
        max-width: 600px;
        flex-direction: column;
        h2 { font-size: 1.8rem; }
        h3 { font-size: 2rem; }
    }
`;

const SwitchImage = styled.img`
    display: flex;
    cursor: pointer;
    width: 110px;
    margin: auto;
    z-index: 1;
    @media all and (max-width: 900px) {
        padding-top: 50px;
        padding-bottom: 20px;
    }
    @media all and (max-width: 480px) {
        width: 70px;
    }
`;

const RightText = styled.div`
        text-align: center;
        width: 240px;
        font-size: 2.2rem;
        text-align: center;
        h2,
        h3 {
            transform: translateY(-2.8rem);
            opacity: 0;
        }
    }
`;

const AnimationTextBox = styled.div`
    position: absolute;
    &.--active {
        position: relative;
        * {
            opacity: 1;
            display: inline-block;
            transition: all .5s ease-in;
            transform: translateY(0rem);
            margin: 0px;
        }
        h3 {
            transition-delay: .2s;
        }
    }
`;


const SmallText = styled.p`
    text-align: center;
    font-size: 1rem;
    line-height: 0;
    margin: 0;
    color: #bdbdbd;
`;

const OnOffText = styled.h1`
    font-size: 3.5rem;
    display: inline-block; 
    transition: all 300ms ease-in-out;
    text-align: center;
    width: 100%;
    em {
        font-style: normal;
        opacity: 0.1;
    }
`;

export default Inner;