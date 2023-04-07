import React from 'react';
import styled from 'styled-components';

import sectionList from '../../sectionList';
import Section from './Section';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProjectMetaData {
    duration: string;
    link: string;
    skillStack: Array<string>;
    subTitle: Array<string>;
    summary: string;
    thumbnail?: string;
    title: string;
}

const Project = ({ data }: { data: Array<IProjectMetaData> }): React.ReactNode => {

    const compareDuration = (a: IProjectMetaData, b: IProjectMetaData): number => {
        return Date.parse(a.duration.split('~')[0]) - Date.parse(a.duration.split('~')[0]);
    }
    
    return (
        <Block>
            {
                sectionList.map((_section) => 
                    <Section key={_section.key} data={_section} projects={
                        data.filter(item => _section.project.includes(item.link)).sort(compareDuration)
                    }/>
                )
            }
        </Block>
    );
}

const Block = styled.div`
    padding: 60px 0 100px;
    max-width: 900px; 
    margin: 0 auto;
    text-align: center;
`;

export default Project;