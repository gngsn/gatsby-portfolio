import React from 'react';
import Icon from '../elements/Icons';
import styled from 'styled-components';

const Skills = styled.div`
    display: flex; flex-wrap : wrap; align-content: center;
    padding: ${({ padding }) => isNaN(padding) ? padding : padding + 'px'};
`;

const SkillIcon = styled.div`
    max-width: ${({ width }) => isNaN(width) ? width : width + 'px'};
    max-height: ${({ height }) => isNaN(height) ? height : height+ 'px'};
    margin: auto 10px auto 0px;
    @media all and (max-width: 900px) {
        max-width: 54px;
        max-height: 54px;
    }
`;

const SkillList = ({ list, width, height, padding = 20, fontSize =1.2}) => {
    return (
        <Skills padding={padding} >
            {
            list.map((icon, index) => (
                <SkillIcon key={icon}>
                    <Icon name={icon} width={width} height={height} fontSize={fontSize} />
                </SkillIcon>
            ))
            }
        </Skills>
    );
};

export default SkillList;
