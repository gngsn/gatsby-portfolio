import React from 'react';

import styled from 'styled-components';
import useTheme from '../../lib/hooks/useTheme';
import palette from '../../lib/styles/palette';

const Inner = () => {
    const { theme } = useTheme();

    return (
        <Container>
            <Block>
                <TextContainer>
                    <h1>PARK <br /> KYUNG SUN </h1>
                    <h3>박경선</h3>
                </TextContainer>
                <ImageContainer>
                    <img src={theme !== 'dark' ? '/img/selfie-white.png' : '/img/selfie.png'} alt="selfie" />
                </ImageContainer>
            </Block>
        </Container>
    )
}

const ImageContainer = styled.div`
    display: flex; align-items: flex-end;
    bottom: 0%; height: 100%;
    img {
        bottom: 0px; width: 800px; transition: all 500ms ease-in-out;
    }
    .dark img {
        width: auto; 
        transform: translateX(0%);
    }
    @media (max-width:1024px) and (min-height:1200px) {
        img{ width: 80vw; left: 30%;}
    }
    @media (max-width:820px) {
        min-width: 500px;
        img {
            transform: translateX(10%);
        }
    }
    @media (max-width:600px) {
        img {
            transform: translateX(-20%);
            opacity: .4;
        }
    }
    @media (max-width:476px) {
        img {
            transform: translateX(-25%) translateY(-10%);
        }
    }
    @media (max-width:375px) {
        img {transform: translateX(-36%) translateY(-13%);}
    }
`;

const TextContainer = styled.div`
    z-index: 2; z-index: 100; margin: auto;
    h1 {
        line-height: 7rem; font-size: 7rem;
        color: ${palette.red0};
    }
    h3 {
        color: ${palette.red0};
        font-size: 2.8rem;
    }
    @media (max-width:1048px) {
        h1 {line-height: 6rem; font-size: 6rem;min-width: 350px;}
    }

    @media (max-width:820px) {
        position: fixed; bottom: 0%;
        h1 {line-height: 4rem; font-size: 4rem;min-width: 600px;}
        h3 {font-size: 2.5rem;}
    }
`;

const Container = styled.div`
position: fixed; top: 0; left: 0;width: 100%; height: 100vh;z-index: -1; pointer-events: none;
`;

const Block = styled.div`
    padding: 72px 150px 0px; display: flex; flex-direction: row; align-items: flex-end; margin: auto; bottom: 0; height: 100vh; max-width: 1440px;
    @media(max-width: 1048px) {
        padding: 72px 70px 0px;
    }
    @media (max-width:820px) {
        padding: 72px 10px 0px;
    }
`;

export default Inner;