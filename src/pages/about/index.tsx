import * as React from "react";

import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import About from "../../components/about";

const IndexPage = () => {
  return (
    <ContextProvider>
      <MainTemplate>
        <About />
      </MainTemplate>
    </ContextProvider>
  )
}

export default IndexPage;
