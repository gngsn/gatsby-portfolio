import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { useQuery, gql } from "@apollo/client";

import SkillList from './SkillList';
import List from './List';
import palette from '../../lib/styles/palette';

import styled from 'styled-components';

const ProjectSection = React.memo(({ item }) => {
    const [open, setOpen] = useState(false);
    const [shortCutData, setShortCutData] = useState({});
    const shortCutDom = useRef();

    const { loading, error, data: projects } = useQuery(GET_PROJECTS);

    console.log('projects : ', projects);
    if (error) console.log('error : ', error);
    
    // const { key, title, cate, project, description, skills } = sectionData;
    
    // const edges = allProjects;
    // const projectList = edges?.allMdx?.edges?.filter(node => project.includes(node.slug));

    const hideShortCut = () => {
        setOpen(false);
    }

    const showShortCut = (data) => {
        setShortCutData(data);
        setOpen(true);
        shortCutDom.current.scrollIntoView({ block: "center", behavior: 'smooth' });
    };

    return (
        <>
            <Info right={item.key % 2 === 1}>
                <Title>
                    <h2>{item.title}</h2>
                    <span></span>
                </Title>
                { item.description }
                <SkillList width={60} height={60} padding="40px 0px 20px" fontSize={1.5} list={item.skills} />
            </Info>
            <div ref={shortCutDom} >
                <ShortCutContainer open={open}>
                    <ShortCut open={open}>
                        <ProjImage src={shortCutData.thumbnail} image={shortCutData.thumbnail} />
                        <ShortCutDetail>
                            <CancelBtn src='/img/cancel-red.png' onClick={hideShortCut} />
                            <h2>{shortCutData.duration}</h2>
                            <h1>{shortCutData.title}</h1>
                            {
                                shortCutData.summary ?
                                    <p>
                                        {shortCutData.summary}
                                        <HashTag>
                                    {
                                            shortCutData.subTitle.map((tit, index) => (
                                                <span key={tit}>{tit} &nbsp;&nbsp;&nbsp;</span>
                                            ))
                                    }
                                        </HashTag>
                                    </p> :
                                    <></>
                            }
                            {
                                shortCutData.skillStack ?
                                    <SkillList width={30} height={30} padding={5} fontSize={1.5} list={shortCutData.skillStack} /> :
                                    <></>
                            }
                            <Link to={`/project/${shortCutData.link}`}>&gt;&gt; 자세히 보기</Link>
                        </ShortCutDetail>
                    </ShortCut>
                </ShortCutContainer>
                <List flipId="square" toggleFullScreen={showShortCut} project={projectList} />
            </div>
        </>
    );
});

const GET_PROJECTS = gql`
query GetProjects {
    allMdx {
    edges {
      node {
        id
        slug
        exports {
          metadata {
            title
            duration
            thumbnail
            link
          }
        }
      }
    }
  }
}
`;

const Title = styled.div`
    display: inline-flex; flex-direction: column; align-items: center; position: relative;
    text-align: center;
    h2 {
        font-size: 4rem; z-index: 1; padding: 0px 20px;
        font-weight: 500;
    }
    span {
        position: absolute; z-index: 0; width: 100%; top: 45%;
        display: inline-block; opacity: 0.4; transform: rotate(-1deg); 
        border-bottom: 10px solid ${palette.red0};
    }
`;

const Info = styled.div`
    display: flex; flex-direction: column; 
    align-items: ${({ right }) => right ? 'flex-end' : 'flex-start'};
    padding: 60px 70px 10px;
    p {
        margin: 0; font-family: 'Noto L';
        text-align: ${({ right }) => right ? 'right' : 'left'}; font-size: 1.8rem;
    }
    @media (max-width:800px) {
        p {font-size: 1.3rem;}
    }
    @media (max-width:660px) {
        padding: 60px 30px 10px;
    }
`;

const ShortCutContainer = styled.div`
    display: flex;
    width: 100%;
    transition: 0.8s height cubic-bezier(0.65, 0, 0.35, 1);
    height: ${({ open }) => open ? '400px' : '0px'};
    padding: ${({ open }) => open ? '50px 30px 10px' : '0px'};
`;

const ShortCut = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    opacity: ${({ open }) => open ? 1 : 0};
    transition-delay: .2s;
    transition: 0.8s opacity cubic-bezier(0.65, 0, 0.35, 1);
`;

const ShortCutDetail = styled.div`
    margin: 0px 0px 0px 40px;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & {
        h2 {font-size: .8rem;margin-top: 0px;}
        h1 {font-size: 1.4rem; margin-top: 0px;}
        p {font-size: .9rem;line-height: 1.5;}
        a {color: #dd4226;font-family: 'Noto L';}
        & > div {margin: 5px 0px;}
    }
`;

const CancelBtn = styled.img`
    max-width: 30px; 
    max-height: 30px;
    position: absolute;
    top: 10px;
    right: 30px;
`;

const HashTag = styled.span`
    color: ${palette.grey2};
    font-size: .7rem;
    display: block;
    margin-top: 10px;
`;

const ProjImage = styled.div`
    display: inline-block;
    width: 60%;
    height: 100%;
    opacity: ${props => props.image ? 1 : 0};
    transition: 0.8s opacity cubic-bezier(0.65, 0, 0.35, 1);
    transition-delay: .4s;
    background-size: cover;
    background-position: center center;
    background-image: ${props => 'url(' + props.image + ')'};
    overflow: hidden;
    border-radius: 10px;
`;

export default ProjectSection;
