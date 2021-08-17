import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import palette from "../../lib/styles/palette";

const BackgroundStyle = createGlobalStyle`
  body {
    background: ${palette.white0};
    margin: 0;
  }
  body * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, p, a {
    font-family: 'Noto Th';
  }
  img {
    max-width: 100%;
    width: 100%;
  }
`;

export interface MainTemplateProps {
    children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <BackgroundStyle />
            <Block>{children}</Block>
        </>
    );
}

const Block = styled.div``;

export default MainTemplate;