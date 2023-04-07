import React from "react";
import { graphql } from 'gatsby';
import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import Project from "../../components/project";
import projectList from '../../projectList';

const IndexPage = () => {

  return (
    <ContextProvider>
      <MainTemplate>
        <Project data={projectList} />
      </MainTemplate>
    </ContextProvider>
  )
}

export default IndexPage;
