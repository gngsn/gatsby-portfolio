import React from 'react';
import styled from 'styled-components';
import { device } from '../../../lib/styles/sizes';

import Graph from './Graph';

const Skill = () => {

    var backgroundColor = [
        '#000', '#000', '#000', '#000', '#000'
    ];
    
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
                    height={200}
                />
                <Graph
                    title="SKILL"
                    datasets={techData}
                    width={400}
                    height={200}
                />
            </GraphContainer>
        </Block>
    )
}

const GraphContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    ${device.tablet} {
        flex-direction: column;
        & div:last-child {
            margin-top: 50px;
        }
    }
    `;
    
const Block = styled.div`
    padding:100px 70px 100px;
    ${device.tablet} {
        justify-content: center;
`;

export default Skill;
