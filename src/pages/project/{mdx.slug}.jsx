import * as React from "react";
import { graphql } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import ProjectDetail from "../../components/project/DetailLayout";


const IndexPage = ({ data }) => {
    const _data = Object({ ...data?.mdx?.exports?.metadata, body: data?.mdx?.body });
    
    return (
        <ContextProvider>
            <MainTemplate>
                <ProjectDetail data={_data}/>
            </MainTemplate>
        </ContextProvider>
    )
}

export const GET_PROJECT = graphql`
query GetProject($slug: String!) {
    mdx(slug: {eq: $slug}) {
        id
        slug
        exports {
            metadata {
                title
                duration
                subTitle
                thumbnail
                backImage
                link
                summary
                skillStack
            }
        }
        body
    }
}
`;

export default IndexPage;
