const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://kyeongsun.com",
    title: "kyeongsun",
    titleTemplate: "%s | Portfolio",
    description: "안녕하세요. 백앤드 개발자를 꿈꾸는 박경선입니다.",
    image: "/img/selfie_sq.png/img/selfie_sq.png",
    url: "https://kyeongsun.com/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://localhost:8000/___graphql'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/src/content/project/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
