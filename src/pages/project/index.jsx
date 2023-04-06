import React from "react";
import { graphql } from 'gatsby';
import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import Project from "../../components/project";

const IndexPage = ({ data }) => {
  const project = data?.allMdx?.edges?.map(item => Object({ id: item.node.id, slug: item.node.slug, ...item.node.exports.metadata }));

  return (
    <ContextProvider>
      <MainTemplate>
        <Project data={project}/>
      </MainTemplate>
    </ContextProvider>
  )
}

export const get_mdx_project_data = graphql`
query GetProjects {
    allMdx(sort: {order: DESC, fields: exports___metadata___duration}) {
    edges {
      node {
        id
        slug
        exports {
          metadata {
            title
            subTitle
            duration
            summary
            thumbnail
            shortcutImage
            link
            skillStack
          }
        }
      }
    }
  }
}
`;

export default IndexPage;
