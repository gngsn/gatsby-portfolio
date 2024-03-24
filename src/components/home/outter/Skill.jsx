import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { device } from '../../../lib/styles/sizes';

const bubbleData = [
    ["Java", 4],
    ["Javascript", 2],
    ["📚"],
    ["Typescript", 4],
    ["Python", 3],
    ["👾"],
    ["C++", 2],
    ["Shell Script", 2],

    ["Nodejs", 2],
    ["🖥"],
    ["Nextjs", 2],
    ["🎵"],
    ["Spring", 4],
    ["React", 3],
    ["🥁"],
    ["AWS", 3],
    ["Nginx", 3],
    ["Postgresql", 2],
    ["🔥"],
    ["MySQL", 4]
];

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const Skill = () => {
    return (
        <Block>
            <h1>Skills.</h1>
            <small>Drag bubbles anywhere</small>
            <Container>
                {
                    bubbleData.map((skill, idx) => (
                        <Draggable key={skill[0]}>
                            <Text num={skill.length === 1 ? getRandomArbitrary(2, 2.3) : (skill[1] + 10) * 0.2} className='link'>{skill[0]}</Text>
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
        ${device.tablet} {
            font-size: 2.5rem;
        }
    }
`;

const Text = styled.h2`
    display: inline;
    cursor: pointer;
    line-height: 1.5;
    white-space: nowrap;
    border-radius: ${({ num }) => num /1.2}rem;
    border: 3px solid ${palette.black0};
    padding: 5px 20px;
    margin: 10px 5px;
    font-size: ${({ num }) => num * 14}px;

    ${device.tablet} {
        margin: 5px;
        font-size: ${({ num }) => num *0.85}rem;
    }
    ${device.mobile} {
        font-size: ${({ num }) => num *0.65}rem;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 40px auto 50px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export default Skill;
