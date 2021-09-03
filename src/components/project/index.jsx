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
        <Block>
            <Title>
                <h1><em>"</em> Back-End Developer <em>"</em></h1>
                <span></span>
            </Title>
            {
                sectionList.map((_section) => {
                    const projects = data.filter(item => _section.project.includes(item.slug));
                    return <Section key={_section.key} data={_section} projects={projects}/>;
                })
            }
        </Block>
    );
}

const Title = styled.div`
    display: inline-flex; flex-direction: column; align-items: center; position: relative;
    text-align: center;
    h1 {
        text-align: center; font-size: 4rem; z-index: 1; padding: 0px 30px;
        em {
            display: inline;
        }
    }
    span {
        position: absolute; z-index: 0; width: 100%; top: 46%;
        display: inline-block; opacity: 0.4; transform: rotate(-1deg); 
        border-bottom: 23px solid #dd4226;
    }
`;

const Block = styled.div`
    padding: 250px 0 100px;
    max-width: 1440px; margin: 0 auto;
    text-align: center;

    .section-cont .post .content h4 {font-size: 2rem;}
    .square {z-index: 100; position: absolute;width: 100%;height: 100%;cursor: pointer;}
    &.detail-active{z-index: -1; pointer-events: none;}

    .dots{position: absolute;display: block;width: 100%; padding: 0;margin: 0;list-style: none;text-align: center;}
    .dots li{position: relative;display: inline-block;margin: 0 5px;padding: 0;width: 20px;height: 20px;cursor: pointer;}
    .dots li button{margin-right: 20px; width: 10px !important; height: 7px !important; border: 0;text-indent:-10000px; cursor: pointer;}

    .center {
        width: 100%; max-width: 100vw;
        .slick-list{
            margin-top: 10px;z-index: 3;
        }
        .slick-track { justify-items: center;display: flex; margin: auto; padding: 15px 0px 30px;}
        .slick-slide {
            margin: 10px;transition: all 500ms ease;max-width: 500px;border-radius: 10px;
            &.slick-active {opacity: 1;}
            img{object-fit: cover; height: 250px;border-radius: 10px;}
            div{width: 100%; height: 100%;}
            .proj{position: relative; margin: 0px; min-height: 120px;}
            .proj a{text-decoration: none; height: 100%;}
            .proj > img{position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
            .proj .open{width: 100vw; height: 100vh;}
            .proj-title{
                z-index: 30;width: 100%;min-height: 120px; display: flex;flex-direction: column; justify-content: center;
                cursor: pointer;
                h1 { font-size: 1.2rem; text-align: center; word-break: keep-all;font-family: 'Noto B'; color: #FFF;}
                h2 { font-size: 0.8rem; text-align: center; margin: 0px;font-family: 'Noto B';color: #FFF;}
                p { font-size: 0.6rem; text-align: center; line-height: 2;margin: 0px;color: #FFF;}
            }
        }
        .slick-prev{display: none !important;}
        .slick-next{display: none !important;}
    }
`;

export default Project;