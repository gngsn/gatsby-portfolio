import React from 'react';

import styled from 'styled-components';
import useTheme from '../../lib/hooks/useTheme';
import palette from '../../lib/styles/palette';

const Inner = () => {
    const { theme } = useTheme();

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
`;

const TextContainer = styled.div`
    z-index: 100; margin: auto;
    padding: 0 20px 0 30px;
    h1 {
        margin: 0;
        line-height: 5.5rem; font-size: 5.2rem;
        color: ${palette.red0};
    }
    h3 {
        color: ${palette.red0};
        font-size: 2.5rem;
    }
    // @media (max-width:1048px) {
    //     h1 {line-height: 6rem; font-size: 6rem;min-width: 350px;}
    // }

    // @media (max-width:820px) {
    //     position: fixed; bottom: 0%;
    //     h1 {line-height: 4rem; font-size: 4rem;min-width: 600px;}
    //     h3 {font-size: 2.5rem;}
    // }
`;

const Container = styled.div`
position: fixed; top: 0; left: 0;width: 100%; height: 100vh;z-index: -1; pointer-events: none;
`;

const Block = styled.div`
    display: flex; flex-direction: row; 
    align-items: flex-end; 
    margin: auto; height: 100vh; max-width: 1440px;
    padding: 72px 50px 0px; 

    // @media(max-width: 1048px) {
    //     padding: 72px 70px 0px;
    // }
    // @media (max-width:820px) {
    //     padding: 72px 10px 0px;
    // }
`;

export default Inner;