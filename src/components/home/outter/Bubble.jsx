import React from 'react';

import styled from 'styled-components';
import palette from '../../../lib/styles/palette';


const bubble = () => {
    return (
        <Block>
            <h1>MOTTO</h1>
            <MottoContainer>
                <Circle />
                <Circle>
                    <TextContainer>
                        <h2>COMMUNICATION</h2>
                        <h3>
                            함께라는 가치를 중요시하며 <br />
                            주변 사람과 소통합니다.
                        </h3>
                    </TextContainer>
                </Circle>
                <Circle>
                    <TextContainer>
                        <h2>GROWTH</h2>
                        <h3>
                            항상 성장을 갈망하며, <br />
                            성장에 대한 남다른  <br />
                            열정을 갖고 있습니다.
                        </h3>
                    </TextContainer>
                </Circle>
                <Circle>
                    <TextContainer>
                        <h2>CONSTANTLY</h2>
                        <h3>
                            어떤 일을 하든지  <br />
                            포기하지 않고 <br />
                            까지 해냅니다.
                        </h3>
                    </TextContainer>
                </Circle>
                <Circle />
            </MottoContainer>
        </Block>
    )
};

const Circle = styled.div`
    border-radius: 50%; position: relative; float: left; margin: auto -14px;border: 1px solid ${palette.black0};
    color: ${palette.black0};
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes bubble{0%{transform: scale(1.0) translate(0, 0px);}100%{transform: scale(1.03) translate(0, -30px);}}

    &:nth-child(1) {height: 280px; width: 280px; margin-top: 170px; animation: bubble 6s ease-in-out alternate infinite;}
    &:nth-child(2) {height: 380px; width: 380px; margin-top: 50px; animation: bubble 3s ease-in alternate infinite;}
    &:nth-child(3) {height: 330px; width: 330px; margin-top: 170px; animation: bubble 5.5s ease-out alternate infinite;}
    &:nth-child(4) {height: 370px; width: 370px; margin-top: 100px; animation: bubble 2.5s ease-in alternate-reverse infinite;}
    &:nth-child(5) {height: 300px; width: 300px;}
`;

const TextContainer = styled.div`
    text-align: center; padding: 20px;
    h2 {
        font-size: 2em;
        display: inline;
        color: ${palette.black0};
    }
    h3 {
        color: ${palette.black0};
        font-size: 1.2em; font-weight: 200; display: block; margin-top: 2em;
    }
`;

const MottoContainer = styled.div`
    display: flex; flex-direction: row; 
`;

const Block = styled.div`
    padding-bottom: 130px; display: flex; flex-direction: column; align-items: center;
    h1 {
        font-size: 5rem;
        color: ${palette.black0}; 
    }
`;


export default bubble;