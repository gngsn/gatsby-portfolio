import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import palette from '../../../lib/styles/palette';
import { device, getScreenSize } from '../../../lib/styles/sizes';



const Bubble = () => {
    const [screen, setScreen] = useState(getScreenSize());

    const motoList = [
        { id: 0, icon: "/svg/moto/growth.svg", iconWidth: '20%', title: "GROWTH.", desc: "An enthusiastic and fast learner who enjoys exploring and diving into new knowledge, driven by curiosity"},
        { id: 1, icon: "/svg/moto/persistence.svg", iconWidth: '25%', title: "PERSISTENCE.", desc: "Constantly striving for success. I am not afraid to fail, as I view it as a stepping stone towards achieving my goals."},
        { id: 2, icon: "/svg/moto/challenge.svg", iconWidth: '20%', title: "CHALLENGE.", desc: "Embrace challenges as a means of expanding knowledge, growth and self-improvement. Failure gives the proper perspective on success."}
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
            <h1>Motto.</h1>
            {
                screen === 'small' ?
                motoList.map(moto =>
                    <TextContainer key={moto.id} iconWidth={moto.iconWidth}>
                        <img src={moto.icon} alt={moto.title}/>
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
                                {/* TODO img style에 반영되도록 변경 */}
                                <TextContainer iconWidth={moto.iconWidth}>  
                                    <img src={moto.icon} alt={moto.title} />
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
    margin: auto -19px; 
    border: 1.3px solid #414141a1;
    border-radius: 50%; 
    background-color: ${palette.ivory0};

    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes bubble{ 
        0% {transform: scale(1.0) translate(0, 0px);} 
        100% {transform: scale(1.03) translate(0, -30px);}
    }

    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    border: .1px solid rgba(255, 255, 255, 0.3);

    &:nth-child(1) {height: 280px; width: 280px; margin-top: 140px; animation: bubble 6s ease-in-out alternate infinite; z-index: 1;}
    &:nth-child(2) {height: 480px; width: 480px; margin-top: 20px; animation: bubble 3s ease-in alternate infinite; z-index: 3;}
    &:nth-child(3) {height: 430px; width: 430px; margin-top: 140px; animation: bubble 5.5s ease-out alternate infinite;z-index: 4;}
    &:nth-child(4) {height: 470px; width: 470px; margin-top: 70px; animation: bubble 2.5s ease-in alternate-reverse infinite;z-index: 2;}
    &:nth-child(5) {height: 300px; width: 300px;z-index: 1;}
`;

const TextContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center; 
    padding: 30px;
    white-space: pre-wrap;
    line-height: 1.6em;

    h2 {
        font-size: 1.6em;
        color: ${palette.black0};
        margin: 20px 0px 5px;
    }

    h3 {
        color: ${palette.black0};
        display: block;
        font-size: 1em; 
        line-height: 1.4;
        padding: 0px 35px;
        font-weight: 400; 
        white-space: pre-wrap;
    }

    img {
        max-width: ${({ iconWidth }) => iconWidth};
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
        img {
            opacity: 0.9;
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
    padding: 100px 0px 150px;
    background-color: ${palette.lavender1};
    h1 {
        font-size: 3.5rem;
        margin-bottom: 70px;
        color: ${palette.black0}; 
        ${device.tablet} {
            font-size: 2.5rem;
        }
    }
`;


export default Bubble;