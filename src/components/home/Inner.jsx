import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { device } from '../../lib/styles/sizes';

const Inner = () => {
    return (
        <Container>
            <Block>
                <ImageContainer>
                    <img src={'/img/gyeongseon.png'} alt="selfie" />
                </ImageContainer>
                <TextContainer>
                    <h1>
                        Hi 👋🏻 
                        I'm gyeong seon Park,
                        Backend Developer 💻
                    </h1>
                </TextContainer>
            </Block>
        </Container>
    )
}

const ImageContainer = styled.div`
    display: flex; align-items: center;
    max-width:100%; width:100%; height: 100%;
    img {
        bottom: 0px; 
        width: 100%;
        max-width: 800px; 
        transition: all 500ms ease-in-out;
    }
    ${device.mobile} {
        display: none;
    }

    ${device.tablet} {
        max-width: 40%;
        height: auto;
        margin-top: 5%;
    }
`;

const TextContainer = styled.div`
    z-index: 100; margin: auto;
    padding: 0 20px 0 30px;
    h1 {
        margin: 0;
        line-height: 5.5rem; 
        font-size: 5.2rem;
        color: ${palette.red0};
        ${device.mobile} {
            line-height: 4rem; 
            font-size: 4rem;
        }
    }
    h3 {
        color: ${palette.red0};
        font-size: 2.5rem;
    }
`;

const Container = styled.div`
position: fixed; top: 0; left: 0;width: 100%; height: 100vh;z-index: -1; pointer-events: none;
`;

const Block = styled.div`
    display: flex; flex-direction: row; 
    align-items: flex-end; 
    margin: auto; height: 100vh; max-width: 1440px;
    padding: 72px 50px 0px; 
    ${device.tablet} {
        align-items: center; 
        flex-direction: column;
    }
    ${device.mobile} {
        padding: 80px 10px 0px;
    }

`;

export default Inner;