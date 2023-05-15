import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const ContactBar = () => {
    return (
        <Block className="link-diff">
            <Box onClick={() => navigate("https://github.com/gngsn")}>
                <h2>Github</h2>
            </Box>
            <Box>
                <Box onClick={() => navigate("https://medium.com/@gngsn")}>
                    <h2>Medium</h2>
                </Box>
                <Box onClick={() => navigate("https://gngsn.tistory.com")}>
                    <h2>Tistory</h2>
                </Box>
            </Box>
            <Box onClick={() => navigate("https://www.linkedin.com/in/kyeongsun-park")}>
                <h2>LinkedIn</h2>
            </Box>
            <Box className="info">
                <div>
                <h2>Kyeongsun Park </h2>
                <h3>
                    Email
                    <br/>
                    enfj.dev@gmail.com
                </h3>
                <h3>
                    Korean 25
                    <br/>
                    SEOUL · YONGIN
                </h3>
                </div>
            </Box>
        </Block>
    )
}

const Block = styled.div`
    padding:0 !important;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    border: 1px solid ${palette.black0};
`;

const Box = styled.div`
    background-color: ${palette.black3};
    border-right: 1px solid ${palette.ivory0};
    display: flex;
    flex: 25%;
    align-items: center;
    justify-content: center;
    width: 100%; height: 100%;
    position: relative;
    height: 25vw;
    
    &.info {
        border-right: none;
        &:hover:before{
            content: none;
        }
        & h2::selection, h3::selection, br::selection{
            color: ${palette.primary};
        }
    }
    h2, h3, &>div {
        color: ${palette.ivory0};
        font-size: 1.8rem;
        z-index: 2;
    }
    h3 {
        margin-top: 40px;
        font-size: 1.2rem;
    }
    &:hover:before {
        z-index: 0;
        content: " ";
        position: absolute;
        width: 80%; height: 80%;
        top: 50; left: 50;
        border-radius: 50%;
        background-color: ${palette.primary};
    }

    ${device.tablet} {
        border-bottom: 1px solid ${palette.ivory0};
        flex: 50%;
        height: 50vw;
        &:nth-child(2) {
            border-right: none;
        }
    }
    ${device.mobile} {
        &:nth-child(3) {
            flex: 100%;
            border-right: none;
            border-bottom: 1px solid ${palette.ivory0};
        }
        &:nth-child(4) {
            height: 100vw;
        }
    }
`;

export default ContactBar;