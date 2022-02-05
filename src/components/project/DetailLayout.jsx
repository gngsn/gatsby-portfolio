import React from 'react'
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from 'styled-components';

import { Paragraph, QuotationMarksTitle, FlexBox, SkillList, ScrollImgContainer, Gallery, LinkIcon } from '../../lib/styles/markdown';
import palette from '../../lib/styles/palette';

const components = {
    QuotationMarksTitle, 
    FlexBox, 
    Paragraph,
    SkillList,
    ScrollImgContainer,
    Gallery,
    LinkIcon
}

const ProjectDetail = React.memo(({ data }) => {

    return (
        <Block>
            {
                data ?
                    <PageLayout>
                        <div className='full-screen-square'/>
                        <Link to='/project'>
                            <CancelImage src='/img/cancel.png'/>
                        </Link>
                        <div>
                            <ContentLayout>
                            <h1> {data.title}</h1>
                            <h2> {data.duration} </h2>
                            {
                                data.body? 
                                <MDXProvider components={components}>
                                    <MDXRenderer> 
                                        {data.body}
                                    </MDXRenderer >
                                </MDXProvider> : null
                            }
                            </ContentLayout>
                        </div>
                    </PageLayout>
                :
                <></>
            }
        </Block>
    )
});

const Block = styled.div`
    * {word-break: keep-all;}
    background-color: ${palette.grey1};
    & > div {
    }
`;

const CancelImage = styled.img`
    position: fixed; right: 50px; z-index: 999; width: 50px; height: 50px; top: 45vh; cursor: pointer;
`;

const ContentLayout = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 100px 50px;
    section {
        margin: auto;
        padding: 10px 0px;
        margin-bottom: 100px;
    }
    p { 
        font-size: 1rem; line-height: 1.5;
    }
    a { 
        font-size: 1rem; line-height: 1.5;
        color: ${palette.red0}; 
    }
`;

const PageLayout = styled.div`
    iframe {width: 100%; max-width: 100%;}
    iframe video {width: 100%; max-width: 100%;}
    .early-buddy {
        section:nth-child(1) {
            margin-bottom: 500px; position: relative;
        }
        iframe{position: absolute; left:50%; transform: translateX(-50%);}
        section:nth-child(2) {
            padding-top: 100px; display: flex; flex-direction: column; justify-content: center;
            img { margin: 0px auto; max-width:700px; box-shadow: 5px 5px 15px 6px rgba(0, 0, 0, 0.205);}
        }
        section:nth-child(4) p { margin-right: 20px; }
    }
    .sopt-page {
        p { line-height: 1.7; }
        .flex-box {
            margin: 0px auto; max-width: 1000px;
            img:nth-child(1) {border-radius: 5px; max-width: 340px;margin-right: 50px;}
            img:nth-child(2) {max-width: 400px; border-radius: 10px; margin-left: 30px;}
        }
    }
    .server-head {
        p { text-align: center;}
        .flex-box {
            & > img { width:50%; border-radius: 10px; max-width: 650px;}
            & *:first-child {margin-right: 10px;}
            a {
                display: inline-flex; align-datas: center;
                img { 
                    width: 30px; display: inline-block; margin-right: 10px;
                }
            }
        }
    }
    .tooc {
        .flex-box > img {max-width: 40%; margin: 0px 20px;}
    }
    .get-rest {
        section:nth-child(1) img { 
            max-width: 500px; margin: 0px auto;
            border-radius: 10px; box-shadow: 0px 0px 40px 5px rgba(32, 32, 32, 0.144); 
        }
        iframe { width: 300px; margin:0px 20px;}
        .flex-box > img { max-width: 40%; margin-right: 20px; }
    }
    .game {
        .flex-box img {max-width: 48%;}
        .flex-box + p {max-width: 95%; margin: 20px auto;}
        .flex-box p:first-child{margin-right: 30px;}
        .flex-box p:last-child{margin-left: 30px;}
    }
    .clayon {
        section {text-align: center;}
        section [class^="ScrollImgContainer"] {margin-top: 40px;}
    }
    .pondan {
        section iframe {
            margin: auto;
        }
    }

    .pokit {
        iframe {margin-right: 20px;}
        .flex-box img {
            max-width: 18%;
            margin: 20px 10px;
        }
    }

    .hci {
        iframe {margin-right: 20px;}
        .flex-box img {
            max-width: 18%;
            margin: 20px 10px;
            box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
        }
    }

    .max3d {
        iframe {margin: 30px auto 0px; width: 100%; }
    }

    .cardnews {
        .news {padding: 10px;}
    }
`;


export default ProjectDetail;