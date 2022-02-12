import React from 'react';
import TypeAnimation from 'react-type-animation';

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
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Hi There 👋🏻 ', 1000, 
                            "Hi There 👋🏻\nMy name is Gyeongseon Park", 2000,
                            "Hi There 👋🏻\nMy name is Gyeongseon Park and I'm a backend developer in Korea.", 2000,
                            "Hi There 👋🏻\nMy name is Gyeongseon Park and I'm a backend developer in Korea.\nI am very curious 🔍 and outgoing 🌿 ", 2000,
                            "Hi There 👋🏻\nMy name is Gyeongseon Park and I'm a backend developer in Korea.\nI am very curious 🔍 and outgoing 🌿 \n\nScroll up, then you can learn more about me."
                        ]}
                        wrapper="h1"
                    />
                </TextContainer>
            </Block>
        </Container>
    )
}

const ImageContainer = styled.div`
    display: flex; align-items: center;
    max-width:100%; 
    width: 30%; height: 100%;
    img {
        bottom: 0px; 
        width: 90%;
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
    margin: auto;
    padding: 0 20px 0 30px;
    width: 70%; 
    h1 {
        width: 100%;
        margin: 0;
        line-height: 3.7rem;
        font-size: 3rem;
        color: ${palette.primary};
        white-space: pre-line;
    }
    h3 {
        color: ${palette.primary};
        font-size: 2.5rem;
    }
    ${device.tablet} {
        width: 100%; 
        h1 {
            line-height: 3.2rem; 
            font-size: 2.5rem;
        }
    }
    ${device.mobile} {
        h1 {
            line-height: 3rem; 
            font-size: 1.7rem;
        }
    }
`;

const Container = styled.div`
    cursor: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; 
    height: 100vh;
    z-index: -1;
`;

const Block = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: flex-end; 
    margin: auto; 
    height: calc(100vh - 72px); 
    max-width: 1440px;
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