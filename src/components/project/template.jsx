import * as React from "react";
import { graphql } from "gatsby";

import ContextProvider from "../base/Layout";
import MainTemplate from "../base/MainTemplate";
import ProjectDetail from "./ProjectContent";

import projectList from '../../projectList';

const IndexPage = ({ data, children }) => {
    
    return (
        <ContextProvider>
            <MainTemplate>
                <ProjectDetail 
                data={
                    Object({ id: data?.mdx?.id, body: data?.mdx?.body, ...projectList.find(p => p.link === data?.mdx?.frontmatter.slug) })
                } 
                body={children} />
            </MainTemplate>
        </ContextProvider>
    )
}

export const GET_PROJECT = graphql`
query GetProject($id: String!) {
    mdx(id: {eq: $id}) {
        id
        body
        frontmatter {
            slug
        }
    }
}
`;

export default IndexPage;
