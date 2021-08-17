import React from 'react'
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from 'styled-components';

import { ServerHead, CookieParking, EarlyBuddy, Tooc, SoptPage} from './details';
import {
    useQuery,
    gql
} from "@apollo/client";

import { CodeBlock } from '../../lib/styles/markdown';

const components = {
    // h1: Header1,
    // h3: Header3,
    // p: Paragraph,
    // a: Link_,
    pre: CodeBlock
}


const ProjectDetail = React.memo(({location, title}) => {
    let content = <></>;
    const link = title;
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { title },
    });
    if (error) console.log('error : ', error);
    console.log('apollo data : ', data);
    const item = { ...data?.mdx.exports.metadata, body: data?.mdx.body};
    console.log('item : ', item);
    
    
    // console.log('data : ', data)
    if (link === 'server-head')
            content = <ServerHead key={link}/>
    if (link === 'cookie-parking')
        content = <CookieParking key={link}/>
    else if (link === 'early-buddy')
        content = <EarlyBuddy key={link}/>
    else if (link === 'tooc')
        content = <Tooc key={link}/>
    else if (link === 'sopt-page')
        content = <SoptPage key={link}/>
    // else if (link === 'get-rest')
    //     content = <GetRest key={link} />
    // else if (link === 'pokit')
    //     content = <Pokit key={link} />
    // else if (link === 'game')
    //     content = <Game key={link} />
    // else if (link === 'baby-closet')
    //     content = <BabyCloset key={link} />
    // else if (link === 'hci')
    //     content = <Hci key={link} />
    // else if (link === '3dmax')
    //     content = <Max3d key={link} />
    // else if (link === 'cardnews')
    //     content = <Cardnews key={link} />

    return (
        <Block className='project-detail'>
            {
                item ?
                    <DetailContainer >
                        <div className='full-screen-square'/>
                        <Link to='/project'>
                            <img id='back-btn' className='back-btn' src='/img/cancel-red.png' />
                        </Link>
                        <div className='post'>
                        <ImageBack image={item.backImage} className='proj-title'>
                            <div className='title'>
                            <h2> {item.duration} </h2>
                            <h3> {item.title}</h3>
                            </div>
                        </ImageBack>
                        {
                            item.body? 
                            <MDXRenderer> 
                                {item.body}
                            </MDXRenderer > : null
                        }
                        </div>
                    </DetailContainer>
                :
                <></>
            }
        </Block>
    )
});


const GET_PROJECT = gql`
query GetProject($title: String!) {
    mdx(slug: {eq: $title}) {
        id
        slug
        exports {
            metadata {
                title
                duration
                subTitle
                thumbnail
                backImage
                link
                summary
                skillStack
            }
        }
        body
    }
}
`;


const Block = styled.div`
* {word-break: keep-all;}
    &>div {
        background-color: #FAFAFA;
    }
    .back-btn{position: fixed; right: 50px; z-index: 999; width: 50px; height: 50px; top: 45vh; cursor: pointer;}
    .post {
        
    }

`;



const DetailContainer = styled.div`
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0px;
        position: fixed;
        overflow: auto;
        z-index: 11;
    `;

const ImageBack = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 111;
    background-image: ${props => 'url(' + props.image + ')'};
    background-position: center;
    background-size: cover;
    display: inline-block;
    opacity: 1;
`;

const PostContainer = styled.div`
& > img{height:100vh; width: 100vw; top: 0; object-fit: cover;z-index: -1; background-attachment: fixed;}
        img{ width: 100%;}
        .title{text-align: left; vertical-align: text-bottom; height: 0; }
        p {font-size: 1rem; line-height: 1.3;}
        .proj-title {
            h2{color:white; font-size: 3.5rem; margin: 55vh 0px 30px 10vw;}
            h3{color:white;font-size: 3.8rem; margin: 0; margin-left: 10vw;}
        }
        h5.quot-title {display:block; font-size: 2rem; text-align: center; margin-top: 100px; font-family: 'Noto R';}
        h5.quot-title:before { content:"“"; font-size: 4rem; line-height: .3; display: block;}
        h5.quot-title:after {content:"”"; font-size: 4rem;line-height: .3; margin-top: 3rem; display: block;}
        a{color: #dd4226; }
        .flex-box{display: flex;width: 100%;justify-content: center; align-items: center;margin: 70px auto;}
        .flex-box h4{margin: 150px 80px 0px;font-size: 20px; max-width: 500px;line-height: 2.4;}

        .skill{
            display: flex; padding: 40px 0px 20px;flex-wrap : wrap; justify-content: center; align-content: center;line-height: 1.5;
        }
        .skill img{height: 60px; width: 60px;margin-right: 15px;}
        .skill h4{display: inline; vertical-align: middle; font-size: 1.5rem;line-height: 1; margin: auto 25px auto 10px; font-family: 'Noto L';}
        .content {
            font-family: 'Noto L';
            max-width: 1440px;
            margin: auto;
        }
        .content [class^="section"] {padding: 10px 100px;}
        .gallery {
            display: flex; flex-direction: row; width: 100%; overflow-x: scroll; overflow-y: hidden; height: 320px;
            img {height: 250px; margin: 5vh 30px;}
            &::-webkit-scrollbar {height: 6px;}
            &::-webkit-scrollbar-thumb {opacity: .4; border-radius: 15px;background-color: #dd4226;}
            &::-webkit-scrollbar-track {opacity: .4; border-radius: 15px;}
        }
        .server-head {
            padding-bottom: 70px;
            h5.quot-title {font-family: 'Noto B'; margin-top: 100px;}
            &>img{margin: auto;margin-bottom: 40px; border-radius: 10px; max-width: 80vw;}
            // .gallery{ scrollbar-3dLight-Color: #dd4226; scrollbar-arrow-color: #dd4226; scrollbar-base-color: #dd4226; scrollbar-Face-Color: #dd4226; scrollbar-Track-Color: #dd4226; scrollbar-DarkShadow-Color: #dd4226; scrollbar-Highlight-Color: #dd4226; scrollbar-Shadow-Color: #dd4226;}
            .flex-box>img{width:50%; border-radius: 10px; max-width: 650px;}
            .flex-box .left{margin-right: 80px;}
            .flex-box p{max-width: 600px; line-height: 2;}
            .flex-box a img{width: 30px;display: inline-block; margin-right: 10px;}
            p {text-align: center;}
            .section4 {padding: 10px 0px 10px 50px;margin-top: 120px;}
            .section5{margin-top: 160px;}
            .section5 a{text-align: center; display: block; display: flex; align-content: center; justify-content: center;}
            .section5 a img,.section5 a p{display: inline-block; align-self: center;}
            // .gallery{ padding: 0px 20px 5px; box-shadow: inset 20px 1px 12px 4px rgba(192, 192, 192, 0.192);}
            .gallery img{box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);}
            .gallery img:last-child{margin-right: 30px;}
            .gallery::-webkit-scrollbar {height: 7px;margin-top: 20px;}
            .gallery::-webkit-scrollbar-thumb {opacity: .4; border-radius: 15px;}
            a, a:link:active,a:visited:active {line-height: 1; font-weight: 200; }
        }
        .early-buddy {
            .flex-box a img{width: 42px;display: inline-block; margin-right: 10px;}
            // a,h1,h2,h3,h4,h5,p {color: #000;}
            a, a:link:active,a:visited:active {line-height: .3; font-weight: 200; display: inline-flex; align-items: center;}
            .flex-box a{margin-top: 30px;}
            & > img{margin: auto;margin-bottom: 40px;}
            iframe{position: absolute; left:50%; transform: translateX(-50%);}
            .section1.video {margin-bottom: 500px;}
            .info {padding-top: 100px; display: flex; flex-direction: column; justify-content: center;}
            .info h5{padding-top: 100px;}
            .info img{margin: 0px auto;width:700px;box-shadow: 5px 5px 15px 6px rgba(0, 0, 0, 0.205);}
            .tech{padding-top: 150px;}
            .tech h5{margin: 120px auto 10px;}
            .flex-box{justify-content: space-around;align-items: center;}
            .flex-box img {max-width: 350px; margin-right: 20px;}
            .flex-box p {max-width: 700px;}
            .section4 .flex-box >p{margin-right: 20px}
            .erd {
                max-width: 999px;
                margin: auto;
            }
        }

        .tooc {
            p b {font-family: 'Noto R';}
            .fb-video{ left: 50%; transform: translateX(-50%); width: 60vw;height: 100%;}
            .fb_iframe_widget_fluid {display: inline-block !important;}
            .flex-box{justify-content: space-around;align-items: center;}
            .flex-box h4{text-align: left;margin: 0px 0px 20px; font-weight: 200;}
            .flex-box .skill {padding: 20px 0px 20px;}
            .flex-box .slick-track {display: flex; flex-direction: row;}
            .flex-box .slick-auto {margin-right: 20px; margin-left: 40px;}
            .flex-box > div img {border-radius: 0px;}
            .flex-box img {max-width: 350px; margin-right: 20px; border-radius: 10px;}
            .flex-box .left {margin-right: 40px;}
            .flex-box p {max-width: 700px; line-height: 1.8; font-size: 1.2rem;}
            .flex-box a.img-cont{margin-right: 20px;}
            .flex-box a:not(.img-cont) img{width: 42px;display: inline-block; margin-right: 10px;}
            .section1 .skill {justify-content: flex-start;}
            a, a:link:active, a:visited:active {line-height: .3; font-weight: 200; display: flex; align-items: center;}
            .section2 {margin-top: 150px;}
            .section3 {margin-top: 150px;}
            .section4 p {font-size: 1.2rem; line-height: 1.8;}
        }
        .sopt-page {
            &>h5{margin-bottom: 20px;}
            .main-img{width: 60vw; height:70vh; overflow-y: scroll;padding-right: 10px; margin: auto; overflow-x: hidden;}
            .main-img img{width: 100%;margin-right: 20px;border-radius: 10px;}
            .main-img::-webkit-scrollbar {width: 6px; }
            .main-img::-webkit-scrollbar-track {border-radius: 6px;}
            .main-img::-webkit-scrollbar-thumb {border-radius: 10px;}
            .section2{margin-top: 160px;}
            .section2 h5{margin-bottom: 10px;}
            .section2 p{line-height: 1.7;}
            .section2 .flex-box {margin: 0px auto; max-width: 1000px;}
            .section2 .flex-box img.left{border-radius: 5px; max-width: 340px;margin-right: 50px;}
            .section2 .flex-box .right{ max-width: 400px; border-radius: 10px; margin-left: 30px;}
            .section3 .img-cont{border-radius: 5px; max-width: 80vw;height: 70vh; padding-right: 20px; overflow-y: scroll; overflow-x: hidden;}
            .section3 .img-cont img{border-radius: 5px; width:100%; margin-right: 20px;}
            .img-cont::-webkit-scrollbar {width: 6px; }
            .img-cont::-webkit-scrollbar-track {border-radius: 6px;}
            .img-cont::-webkit-scrollbar-thumb {border-radius: 10px;}
            .section3{margin-top: 200px;}
            .section3 h5{margin-bottom: 10px;}
            .section3 .img-cont{width: 60vw; height:70vh; overflow-y: scroll;padding-right: 10px; margin: 40px auto;}
            .section3 .img-cont img{width: 100%;margin-right: 20px;border-radius: 10px;}
            .section3 p{line-height: 1.7;font-size: 1.2rem;}
        }

        .get-rest {
            .section1{display: flex; flex-direction: column; align-items: center;}
            .section1 img{width: 700px; border-radius: 10px; margin: auto;box-shadow: 0px 0px 40px 5px rgba(32, 32, 32, 0.144);}
            .section2{display: flex; flex-direction: column; justify-content: space-around; max-width: 1200px; margin: auto; margin-top: 80px;}
            .section2 iframe{width: 300px; margin:0px 20px;}
            .section2 .flex-box {margin-top: 10px;}
            .section2 .flex-box > div{max-width: 500px;margin-left: 50px;}
            .section2 p{font-size: 1.2rem; line-height: 2.5; }
            .section2 .flex-box .skill img{height: 60px;width: 60px;}
            .section3{padding: 20px 0px 200px; margin-top: 100px;}
            .section3 .g-cnt {margin-top: 40px;}
            .section3 .pdf-nav img {
                max-width: 250px;
                margin: 30px 50px;
                box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
            }
            .slick-dots li{display: none;}
            .section4{margin-bottom: 300px;}
            .section4 .flex-box a img{width: 350px;}
            .section4 .flex-box p{margin: 0px 70px;}
            .section4 p{font-size: 1.2rem; line-height: 1.7;}
        }

        .game {
            p {line-height: 1.8;}
            .section1 .flex-box img{max-width: 48%;}
            .section3 .flex-box img{max-width: 48%;}
            .section3 .flex-box img:first-child{margin-right: 30px;}
            .section3 .flex-box img:last-child{margin-left: 30px;}
        }

        .baby-closet {
            p {line-height: 1.8;}
            h5.quot-title {
                margin-top: 150px;
            }
            .section1 .flex-box img{max-width: 48%;}
            .section3 a{display: inline-flex; align-items: center;}
            .section3 a img{height: 30px; width: 30px; margin-right: 10px;}
            .section3{margin-bottom: 200px;}
        }

        .hci {
            .section3 .flex-box img {
                max-width: 20%;
                margin: 10px;
                box-shadow: 0px 0px 12px 10px rgba(192, 192, 192, 0.192);
            }
            .section3 {margin-bottom: 200px;}
        }
        .max3d {
            .section1 p {margin: auto; font-size: 1.2rem;}
            .section1 iframe {margin: 30px auto 0px; width: 100%; }
            .section2 {margin-bottom: 200px;}
        }

        .cardnews {
            .section5 {margin-bottom: 200px;}
            .news {padding: 10px;}
        }
`;


export default ProjectDetail;