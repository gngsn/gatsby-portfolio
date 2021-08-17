import React from "react";
import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import Project from "../../components/project";

const IndexPage = () => {
  return (
    <ContextProvider>
      <MainTemplate>
        <Project /> 
      </MainTemplate>
    </ContextProvider>
  )
}

export default IndexPage;
