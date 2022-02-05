import React, { useState } from 'react';
import classNames from 'classnames';

import styled from 'styled-components';
import { device } from '../../lib/styles/sizes';

const Inner = React.memo(({ theme, isOn }) => {
    let [turnOn, setTurnOn] = useState(theme);
    const audio = typeof window !== "undefined" ? new Audio('/img/switch.mp3') : null;

    const clickSwitch = () => {
        audio.play();
        isOn(!turnOn);
        setTurnOn(!turnOn);
    }
    
    return (
        <Container light={theme === 'light'}>
            <div>
                {
                    turnOn ?
                        <OnOffText><em>ON/</em>OFF</OnOffText> :
                        <OnOffText>ON<em>/OFF</em></OnOffText>
                }
                <SmallText className="caption">"push the switch"</SmallText>
            </div>
            <div>
                <SwitchImage alt="switch" onClick={clickSwitch} className="link switch" id="switch" src={turnOn ? '/img/switch-on.png' : '/img/switch-off.png'} />
            </div>
            <div>
                <RightText>
                    <AnimationTextBox className={classNames('rightText', { '--active': turnOn })} >
                        <h2> 어울릴 땐,</h2>
                        <h3>최고의 화합을</h3>
                    </AnimationTextBox>
                    <AnimationTextBox className={classNames('rightText', { '--active': !turnOn })}>
                        <h2> 개발할 땐,</h2>
                        <h3>깊은 집중을</h3>
                    </AnimationTextBox>
                </RightText>
            </div>
        </Container>
    )
});


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
    max-width: 900px;
    width: 100%; 
    margin: 0 auto;
    color: ${({light}) => light ? 'black' : 'white'};
    
    & div {
        flex-basis: 33.33%;
    }
    
    h2, h2 em {
        margin-bottom: 10px;
        font-size: 2.2rem;
        margin: 10px;
    }

    h3, h3 em {
        font-size: 2.5rem;
        margin: 0px;
    }

    & {
        MuiGrid-root {
            width: 100%;
        }
    }

    ${device.tablet} {
        padding-top: 60px;
        max-width: 600px;
        flex-direction: column;
        h2 { font-size: 1.5rem; }
        h3 { font-size: 1.8rem; }
    }
`;

const SwitchImage = styled.img`
    display: flex;
    cursor: pointer;
    width: 110px;
    margin: auto;
    z-index: 1;
    padding-left: 10px;

    ${device.tablet} {
        padding-top: 50px;
        padding-bottom: 20px;
        width: 40%;
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
        }
    }
`;


const SmallText = styled.p`
    text-align: center;
    font-size: 1rem;
    line-height: 0;
    margin: 0;
    color: #bdbdbd;
    ${device.tablet} {
        font-size: .8rem;
    }
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

    ${device.tablet} {
        font-size: 2.3rem;
    }
`;

export default Inner;