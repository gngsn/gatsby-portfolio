import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const ContactBar = () => {
    return (
        <Box className="link-diff">
            <div onClick={() => navigate("https://gngsn.tistory.com/")}>
                <h2>Blog</h2>
            </div>
            <div onClick={() => navigate("https://www.instagram.com/pppppppppark")}>
                <h2>Instagram</h2>
            </div>
            <div onClick={() => navigate("https://github.com/gngsn")}>
                <h2>Github</h2>
            </div>
            <div>
                <h3>
                    Gyeongseon Park 
                    <br/>
                    <br/>
                    Email
                    <br/>
                    <em>rudtjs4540@gmail.com</em>
                </h3>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pppppppppark">
                </a>
            </div>
        </Box>
    )
}

const Box = styled.div`
    padding:0 !important;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid ${palette.black0};
    & > div {
        background-color: ${palette.black2};
        border-right: 1px solid ${palette.ivory0};
        display: flex;
        flex: 25%;
        align-items: center;
        justify-content: center;
        width: 100%; height: 100%;
        position: relative;
        height: 25vw;
        &:last-child {
            border-right: none;
        }
    }
    h2, h3 {
        color: ${palette.ivory0};
        display: inline;
        font-size: 1.8rem;
        z-index: 2;
    }
    h3 {
        font-size: 1.4rem;
        em {
            font-size: 80%;
        }
    }
    h2:hover {}
    & > div:hover:before {
        z-index: 0;
        content: " ";
        position: absolute;
        width: 80%; height: 80%;
        top:50; left: 50;
        border-radius: 50%;
        background-color: ${palette.primary};
    }

    ${device.tablet} {
        & > div {
            flex: 50%;
            height: 50vw;
            &:nth-child(1) {
                border-bottom: 1px solid ${palette.ivory0};
            }
            &:nth-child(2) {
                border-bottom: 1px solid ${palette.ivory0};
                border-right: none;
            }
        }
    }
`;

export default ContactBar;