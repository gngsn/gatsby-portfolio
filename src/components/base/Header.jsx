import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';

import { device } from '../../lib/styles/sizes';

const Header = () => {

    return (
        <Block>

            <Link className="link" to={"/"}> park. </Link>
            <Link className="link" to={"about"}> about. </Link>
            <Link className="link" to={"/project"}> project. </Link>
            <a href={`https://gngsn.s3.ap-northeast-2.amazonaws.com/resume.pdf`} className="link" target="_blank" rel="noreferrer" id="resume" >
                resume.
            </a>

        </Block>
    )
}

const Block = styled.div`
    cursor: none;
    border-bottom: 1px solid #000;
    background-color: ${palette.background};
    position: fixed; 
    display: flex; 
    z-index: 10; 
    top: 0%; 
    width: 100%; 
    ${device.mobile} {
        flex-wrap: wrap;
        border-bottom: none;
    }

    a, .link {
        padding: 10px;
        width:100%; max-width: 200px;
        display: inline-flex;
        align-items: center; justify-content: center;
        font-size: 2.2rem;
        font-weight: 900;
        margin: 0px; position: relative;
        color: ${palette.black0};
        text-decoration: none;
        &:hover {
            text-decoration: line-through;
        }

        ${device.mobile} {
            max-width: none;
            flex-basis: 50%;
            font-size: 1.5rem;
            border-left: 1px solid ${palette.black0};
            border-bottom: 1px solid ${palette.black0};
        }

        &:first-child {
            margin: 0px auto 0px 0px;
            color: ${palette.primary};
            ${device.tablet} {
                border-right: none;
            }
            ${device.mobile} {
                color: ${palette.primary};
            }
        }
    }
`;

export default Header;