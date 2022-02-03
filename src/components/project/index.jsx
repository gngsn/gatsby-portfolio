import React from 'react';
import styled from 'styled-components';

import useProjects from '../../lib/hooks/useProjects';
import sectionList from '../../sectionList';
import Section from './Section';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import palette from '../../lib/styles/palette';

const Project = ({ data }) => {
    const { setProjects } = useProjects();
    setProjects(data);

    return (
        <Block>
            {
                sectionList.map((_section) => {
                    const projects = data.filter(item => _section.project.includes(item.slug));
                    return <Section key={_section.key} data={_section} projects={projects}/>;
                })
            }
        </Block>
    );
}


const Block = styled.div`
    padding: 60px 0 100px;
    max-width: 900px; margin: 0 auto;
    text-align: center;

    .section-cont .post .content h4 {font-size: 2rem;}
    .square {z-index: 100; position: absolute;width: 100%;height: 100%;cursor: pointer;}
    &.detail-active{z-index: -1; pointer-events: none;}

    .dots{position: absolute;display: block;width: 100%; padding: 0;margin: 0;list-style: none;text-align: center;}
    .dots li{position: relative;display: inline-block;margin: 0 5px;padding: 0;width: 25px;height: 20px;cursor: pointer;}
    .dots li button {margin-right: 20px; border-radius: 50%; width: 15px !important; height: 15px !important; border: 0;text-indent:-10000px; cursor: pointer;}
    .dots li.slick-active button{background-color: ${palette.red0}; opacity: .8;}

`;

export default Project;