import React from 'react';
import styled from 'styled-components';
import { getScreenSize } from '../../lib/styles/sizes';

const SkillList = ({ list, size= 82, padding = 20}) => {
    const wsize = getScreenSize()
    const perline = wsize == "xsmall" ? 8 : 14

    return (
        <Skills padding={padding}>
            <Icon width={size * list.length} src={`https://skillicons.dev/icons?i=${list.join(",")}&perline=${perline}`}/>
        </Skills>
    );
};

const Skills = styled.div`
    display: flex; flex-wrap : wrap; align-content: center;
    max-width: ${({ width }) => isNaN(width) ? width : width + 'px'};
    padding: ${({ padding }) => isNaN(padding) ? padding : padding + 'px'};
`;

const Icon = styled.img`
    max-width: ${({ width }) => isNaN(width) ? width : width + 'px'};
`;

export default SkillList;
