import React, { useEffect, useRef } from 'react';
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
    ["🖥"],["📂"],["🗂️"],["🧮"],["📓"],["🖍️"],["🖌️"],["🖋️"],
    ["📖"],["👾"],["💪🏻"],["🔥"],["🌈"],["💻"],["📟"],["💡"], ["📌"], ["📕"],

    ["Nextjs", 2],
    ["🎵"], ["🌞"],
    ["Spring", 4],
    ["Airflow", 3],
    ["Kubernetes", 2],
    ["Docker", 3],
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
    const ref = useRef();

    const minBubbleWidth = 100;
    const minBubbleHeight = 80;

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            console.log(rect.width);
            console.log(rect.height);
        }
    }, []);

    return (
        <Block style={{backgroundColor: "blanchedalmond"}}>
            <h1>Skills.</h1>
            <small>Drag bubbles anywhere</small>
            <Container ref={ref}>
                {
                    bubbleData.map((skill, idx) => {
                        const size = skill.length === 1 ? getRandomArbitrary(2, 2.3) : (skill[1] + 10) * 0.2
                        const containerSize = ref.current?.getBoundingClientRect()

                        const containerWidth = containerSize?.width ?? window.screen.width
                        const containerHeight = containerSize?.height ?? 500

                        const x = getRandomArbitrary(-minBubbleWidth/1.2, containerWidth - minBubbleWidth)
                        const y = getRandomArbitrary(minBubbleHeight, containerHeight - minBubbleHeight)
                        
                        return (
                        <Draggable key={skill[0]}>
                            <Bubble className='link' num={size} x={x} y={y} >
                                <Text num={size}>{skill[0]}</Text>
                            </Bubble>
                        </Draggable>
                    )})
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

const Bubble = styled.div`
    display: inline;
    cursor: pointer;
    position: absolute;
    left: ${({ x }) => x}px;
    top: ${({ y }) => y}px;
    border-radius: ${({ num }) => num /1.2}rem;
    border: 3px solid ${palette.black0};
    padding: 5px 20px;
    background: rgba(255, 255, 255, 0.24);
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 30px;
    backdrop-filter: blur(5.9px);
    border: 0.1px solid rgba(255, 255, 255, 0.5);
    font-size: ${({ num }) => num * 14}px;

    ${device.tablet} {
        margin: 5px;
        font-size: ${({ num }) => num *0.85}rem;
    }
    ${device.mobile} {
        font-size: ${({ num }) => num *0.65}rem;
    }
`;

const Text = styled.h2`
    cursor: pointer;
    padding: 5px 20px;
    line-height: 1.5;
    white-space: nowrap;
    border-radius: ${({ num }) => num /1.2}rem;
    font-size: ${({ num }) => num * 14}px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 40px auto 50px;

    position: relative;
    min-width: 100%;
    min-height: 500px;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export default Skill;
