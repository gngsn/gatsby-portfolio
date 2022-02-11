import React from 'react';
import { createGlobalStyle } from "styled-components";
import palette from "../../lib/styles/palette";

const BackgroundStyle = createGlobalStyle`
  body {
    background: ${palette.background};
    margin: 0;
  }

  body * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, a, input, textarea, div, img {
    // font-family: 'Nanum Gothic Coding', monospace;
    // font-family: 'Hahmlet', serif;
    font-family: 'Fira Code', Roboto, monospace;
    // font-family: 'Source Code Pro', monospace;
    // font-family: 'Gideon Roman', cursive;
    // font-family: 'Lora', serif;
    cursor: none;
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
            <div>{children}</div>
        </>
    );
}


export default MainTemplate;