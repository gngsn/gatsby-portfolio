import React from 'react';
import styled from 'styled-components';

import useProjects from '../../lib/hooks/useProjects';
import sectionList from '../../sectionList';
import Section from './Section';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = ({ data }) => {
    const { setProjects } = useProjects();
    setProjects(data);

    return (
        <Container>
            <Block>
                {
                    sectionList.map((_section) => {
                        const projects = data.filter(item => _section.project.includes(item.slug));
                        return <Section key={_section.key} data={_section} projects={projects}/>;
                    })
                }
            </Block>
        </Container>
    );
}


const Container = styled.div`
    border-left: 2px solid #000;
    border-right: 2px solid #000;
`;

const Block = styled.div`
    padding: 60px 0 100px;
    max-width: 900px; margin: 0 auto;
    text-align: center;
`;

export default Project;