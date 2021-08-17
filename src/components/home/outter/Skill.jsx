import React from 'react';

import Graph from './Graph';
import useTheme from '../../../lib/hooks/useTheme';

import styled from 'styled-components';

const Skill = () => {
    const { theme } = useTheme();

    var backgroundColor = [
        '#000', '#000', '#000', '#000', '#000'
    ];
    
    if (theme === 'dark') {
        backgroundColor = [ '#fff', '#fff', '#fff', '#fff', '#fff'];
    } else {
        backgroundColor = [ '#000', '#000', '#000', '#000', '#000'];
    }
    
    var langData = {
        labels: ["Java", "JS", "MySQL", "PHP", "C"],
        datasets: [{
            data: [8, 10, 10, 7, 5],
            backgroundColor: backgroundColor
        }]
    };

    var techData = {
        labels: ["Node", "Spring", "Linux", "Git", "MySQL"],
        datasets: [{
            data: [10, 7, 8, 9, 10],
            backgroundColor: backgroundColor
        }]
    };

    return (
        <Block>
            <GraphContainer>
                <Graph
                    title="LANGUAGE"
                    datasets={langData}
                    width={400}
                    height={300}
                />
                <Graph
                    title="SKILL"
                    datasets={techData}
                    width={400}
                    height={300}
                />
            </GraphContainer>
        </Block>
    )
}

const GraphContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Block = styled.div`
    padding:100px 70px 100px;
    @media (max-width:820px) {
        .break-line820 {display: inline;}
        &.skill {padding: 50px 60px 200px;}
        &.skill h1 {font-size: 2rem;}
        &.skill .graph-container {flex-direction: column; padding-left: 2vw;}
        &.skill .graph-container .graph {margin-right: 6vw;margin-top: 50px;}
        &.skill .graph-container canvas {width:80vw !important; height: 200px !important; margin-top: 10vh;  }
    }
`;

export default Skill;
