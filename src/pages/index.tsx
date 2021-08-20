import * as React from "react";

import ContextProvider from "../components/base/Layout";
import MainTemplate from "../components/base/MainTemplate";
import Home from "../components/home";

const IndexPage = () => {
  return (
    <ContextProvider>
      <MainTemplate>
        <Home />
      </MainTemplate>
    </ContextProvider>
  )
}

export default IndexPage;
