import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';

import SkillList from './SkillList';
import List from './List';
import palette from '../../lib/styles/palette';

import styled from 'styled-components';

const Section = ({ data, projects }) => {
    const [open, setOpen] = useState(false);
    const [shortcut, setShortcut] = useState({});
    const shortCutDom = useRef();

    const hideShortcut = () => {
        setOpen(false);
    }

    const showShortcut = (data) => {
        setShortcut(data);
        setOpen(true);
        shortCutDom.current.scrollIntoView({ block: "center", behavior: 'smooth' });
    };

    return (
        <>
            <Info right={data.key % 2 === 1}>
                <Title>
                    <h2>{data.title}</h2>
                </Title>
                {data.description}
                <SkillList width={60} height={60} padding="40px 0px 20px" fontSize={1.5} list={data.skills} />
            </Info>
            <div ref={shortCutDom} >
                <ShortCutContainer open={open}>
                    <ShortCut open={open}>
                        <ShortCutDetail>
                            <CancelBtn src='/img/cancel.png' onClick={hideShortcut} />
                            <h2>{shortcut.duration}</h2>
                            <h1>{shortcut.title}</h1>
                            {
                                shortcut.summary ?
                                    <p>
                                        {shortcut.summary}
                                        <HashTag>
                                    {
                                            shortcut.subTitle.map(tit => (
                                                <span key={tit}>{tit} &nbsp;&nbsp;&nbsp;</span>
                                            ))
                                    }
                                        </HashTag>
                                    </p> :
                                    <></>
                            }
                            {
                                shortcut.skillStack ?
                                    <SkillList width={30} height={30} padding={5} fontSize={1.5} list={shortcut.skillStack} /> :
                                    <></>
                            }
                            <Link to={`/project/${shortcut.link}`}>&gt;&gt; 자세히 보기</Link>
                        </ShortCutDetail>
                    </ShortCut>
                </ShortCutContainer>
                {
                    projects ?
                        <List flipId="square" show={5} scroll={1} autoplay={true} autoplaySpeed={1500} setShortcut={showShortcut} project={projects} />
                    : null
                }
            </div>
        </>
    );
};

const Title = styled.div`
    display: inline-flex; flex-direction: column; align-items: center; position: relative;
    text-align: center;
    h2 {
        font-size: 3rem; 
        z-index: 1; padding: 0px;
        font-weight: 800;
    }
`;

const Info = styled.div`
    display: flex; flex-direction: column; 
    align-items: ${({ right }) => right ? 'flex-end' : 'flex-start'};
    padding: 80px 50px 10px;
    p {
        padding: 0px; font-weight: 500; line-height: 2.2rem; 
        margin: 0;
        text-align: ${({ right }) => right ? 'right' : 'left'};
        font-size: 1.4rem; font-weight: 500;
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
    height: ${({ open }) => open ? 'auto' : '0px'};
    padding: ${({ open }) => open ? '40px 60px 50px' : '0px'};
    transition: 0.8s height cubic-bezier(0.65, 0, 0.35, 1);
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
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & {
        h2 {font-size: .8rem;margin-top: 0px;}
        h1 {font-size: 1.4rem; margin-top: 0px;}
        p {font-size: .9rem;line-height: 1.5;white-space: break-spaces;}
        a {color: #dd4226;font-family: 'Noto L';}
        & > div {margin: 5px 0px;}
    }
`;

const CancelBtn = styled.img`
    max-width: 30px; 
    max-height: 30px;
    position: absolute;
    top: 10px;
    cursor: pointer;
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
    box-shadow: 0px 0px 7px 7px #00000011;
    border-radius: 10px;
`;

export default Section;
