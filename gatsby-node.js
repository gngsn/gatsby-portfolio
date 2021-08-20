const path = require("path");

exports.onCreatePage = async ({
    page,
    actions
}) => {
    const {
        createPage
    } = actions;

    // const projectDetail = path.resolve(`src/pages/project/detail.tsx`)

    // if (page.path.match(/^\/project\/[\w]+/)) {
    //     page.matchPath = "/project/:title";
    //     page.component = projectDetail;
    //     createPage(page);
    // }
};