import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import MainTemplate from "../../components/base/MainTemplate";
import ProjectDetail from "../../components/project/DetailLayout";

interface IProps extends PageProps {
    title: string;
}

const IndexPage = ({ title = "cookie-parking" }:IProps) => {
    return (
        <ContextProvider>
            <MainTemplate>
                <ProjectDetail title={title} />
            </MainTemplate>
        </ContextProvider>
    )
}

export default IndexPage;
