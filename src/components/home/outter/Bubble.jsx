import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import palette from '../../../lib/styles/palette';
import { device, getScreenSize } from '../../../lib/styles/sizes';

const Bubble = () => {
    const [screen, setScreen] = useState(getScreenSize());

    const motoList = [
        { id: 0, title: "COMMUNICATION", desc: "Communicate with people, putting importance on the value of being together.", descKr: "함께라는 가치를 중요시하며\n주변 사람과 소통합니다." },
        { id: 1, title: "GROWTH", desc: "Always crave for growth, and I have a special passion for it.", descKr: "항상 성장을 갈망하며,\n성장에 대한 남다른 열정을\n갖고 있습니다."},
        { id: 2, title: "CONSTANTLY", desc: "No matter what I do, I don't give up and even if it takes a long time, I will do it.", descKr: "어떤 일을 하든지\n포기하지 않고\n끝까지 해냅니다."}
    ];

    useEffect(() => {
        if (window === "undefined") return;
        
        const handler = () => {
            setScreen(getScreenSize());
        }
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return (
        <Block>
            <h1>motto.</h1>
            {
                screen === 'small' ?
                motoList.map(moto =>
                    <TextContainer key={moto.id}>
                        <h2> {moto.title} </h2>
                        <h3>
                            {moto.desc}
                        </h3>
                    </TextContainer>
                    )
                :
                <MottoContainer>
                    <Circle />
                    {
                        motoList.map(moto =>
                            <Circle key={moto.id}>
                                <TextContainer>
                                    <h2> {moto.title} </h2>
                                    <h3>
                                        {moto.desc}
                                    </h3>
                                </TextContainer>
                            </Circle>
                        )
                    }
                    <Circle />
                </MottoContainer>
            }
        </Block>
    )
};

const Circle = styled.div`
    position: relative; 
    float: left; 
    color: ${palette.black0};
    margin: auto -14px; 
    border: 1px solid ${palette.black0};
    border-radius: 50%; 
    background-color: ${palette.ivory0};

    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes bubble{ 
        0% {transform: scale(1.0) translate(0, 0px);} 
        100% {transform: scale(1.03) translate(0, -30px);}
    }

    &:nth-child(1) {height: 280px; width: 280px; margin-top: 140px; animation: bubble 6s ease-in-out alternate infinite;}
    &:nth-child(2) {height: 380px; width: 380px; margin-top: 20px; animation: bubble 3s ease-in alternate infinite;}
    &:nth-child(3) {height: 330px; width: 330px; margin-top: 140px; animation: bubble 5.5s ease-out alternate infinite;}
    &:nth-child(4) {height: 370px; width: 370px; margin-top: 70px; animation: bubble 2.5s ease-in alternate-reverse infinite;}
    &:nth-child(5) {height: 300px; width: 300px;}
`;

const TextContainer = styled.div`
    text-align: center; 
    padding: 20px;
    white-space: pre-wrap;
    line-height: 1.6em;
    h2 {
        font-size: 2em;
        display: inline;
        color: ${palette.black0};
    }

    h3 {
        color: ${palette.black0};
        display: block; 
        margin: 2em auto 0;
        font-size: 1.2em; 
        font-weight: 400; 
        white-space: pre-wrap;
    }
    ${device.tablet} {
        width: 100%;
        margin: 20px auto;
        h2 {
            padding: 5px;
            font-size: 1.6em;
            text-decoration: underline;
        }
        h3 {
            margin-top: 1em;
        }
    }
`;

const MottoContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    ${device.tablet} {
        flex-direction: column;
    }
`;

const Block = styled.div`
    padding-bottom: 130px; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    background-color: ${palette.lavender1};
    h1 {
        font-size: 3.5rem;
        color: ${palette.black0}; 
        ${device.tablet} {
            font-size: 2.5rem;
        }
    }
`;


export default Bubble;