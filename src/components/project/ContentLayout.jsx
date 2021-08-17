import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

import { BaseElement } from '../../lib/styles/markdown';

const components = {
    // h1: Header1,
    // h3: Header3,
    // p: P,
    Paragraph,
    div: BaseElement,
    QuotationMarksTitle, 
    FlexBox, 
    SkillList
}

const ContentLayout = React.memo(({ content }) => {
    return (
        <ContentLayout>
            {
                content ?
                    <MDXProvider components={components}>
                        <MDXRenderer>
                            {content}
                        </MDXRenderer >
                    </MDXProvider> : null
            }
        </ContentLayout>
    )
});


const Paragraph = styled.h4`
    font-size: 1.2rem; line-height: 1.3;
    text-align: ${({ align = 'left' }) => align};
`;

const QuotationMarksTitle = styled.h5`
    display:block; font-size: 2rem; text-align: center; margin-top: 100px; font-family: 'Noto R';}
    &:before { 
        content:"“"; font-size: 4rem; line-height: .3; display: block;
    }
    &:after {
        content:"”"; font-size: 4rem;line-height: .3; margin-top: 3rem; display: block;
    }
`;

const SkillList = styled.div`
    display: flex; padding: 40px 0px 20px; flex-wrap: wrap; justify-content: center; align-content: center;line-height: 1.5;
    img { height: 60px; width: 60px; margin-right: 15px;}
    h4 { display: inline; vertical-align: middle; font-size: 1.5rem;line-height: 1; margin: auto 25px auto 10px; font-family: 'Noto L';}
`;

const FlexBox = styled.div`
    display: flex;
`;

export default ContentLayout;