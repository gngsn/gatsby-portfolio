import React from 'react';
import Icon from '../elements/Icons';
import styled from 'styled-components';

const Skills = styled.div`
    display: flex; padding: 40px 0px 20px; flex-wrap : wrap; align-content: center;
`;

const SkillIcon = styled.div`
    max-width: 72px;
    max-height: 72px;
    margin: auto 10px auto 0px;
    @media all and (max-width: 900px) {
        max-width: 54px;
        max-height: 54px;
    }
`;

const SkillList = React.memo(({ list, width = '100%', height = '100%', padding =20, fontSize =1.2, style= {} }) => {
    return (
        <Skills container style={style}>
            {
            list.map((icon, index) => (
                <SkillIcon key={index}>
                    <Icon name={icon} width={width} height={height} fontSize={fontSize} />
                </SkillIcon>
            ))
            }
        </Skills>
    );
});

export default SkillList;
