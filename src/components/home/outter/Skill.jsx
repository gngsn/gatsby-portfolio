import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';

const Skill = () => {
    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const skills = [
        "Java 3", 
        "Javascript 4", 
        "📚",
        "Typescript 3", 
        "Python 3", 
        "👾",
        "C++ 3", 
        "Bash 2", 
        "Go 2", 
        
        "Nodejs 3", 
        "🖥",
        "Nextjs 3", 
        "🎵",
        "Spring 3", 
        "React 3", 
        "🥁",
        "AWS 3", 
        "Nginx 2", 
        "Mongodb 2", 
        "🔥",
        "MySQL 3"
    ];

    return (
        <Block>
            <h1>skill.</h1>
            <Container>
                {
                    skills.map(skill => (
                        <Draggable key={skill}>
                            <Text random={getRandom(1.5, 3)} className='link'>{skill}</Text>
                        </Draggable>
                    ))
                }
            </Container>
        </Block>
    )
}

const Block = styled.div`
    border-top: 1px solid ${palette.black0};
    border-bottom: 1px solid ${palette.black0};
    max-width: 1960px;
    margin: auto;

    h1 {
        font-size: 3.5rem;
        color: ${palette.black0}; 
    }
`;

const Text = styled.h2`
    display: inline;
    cursor: pointer;
    line-height: 1.5;
    white-space: nowrap;
    border-radius: 30px;
    border: 3px solid ${palette.black0};
    padding: 5px 20px;
    margin: 10px 5px;
    font-size: ${({ random }) => random}rem;

    ${device.tablet} {
        margin: 5px;
        font-size: ${({ random }) => random*0.85}rem;
    }
    ${device.mobile} {
        font-size: ${({ random }) => random*0.65}rem;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 40px auto 50px;
    flex-wrap: wrap;
    align-items: center;
`;

export default Skill;
