import React from 'react';
import styled from 'styled-components';

const SkillList = ({ list, size= 82, padding = 20}) => {
    return (
        <Skills padding={padding}>
            <Icon width={size * list.length} src={`https://skillicons.dev/icons?i=${list.join(",")}`}/>
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
