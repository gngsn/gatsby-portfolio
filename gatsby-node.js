const path = require("path")
const postTemplate = path.resolve(`./src/pages/project/template.jsx`)

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  const {
    createPage
  } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    createPage({
      path: `/project/${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      },
    })
  })
}