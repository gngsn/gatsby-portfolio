import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = props => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });
            console.log('image : ', image)
            console.log('image.node.childImageSharp.fluid.src : ', image.node.childImageSharp.fluid.src)
            if (!image) {
                return null;
            }

            const imageData = {
                url: image.node.childImageSharp.fluid.src,
                layout: "fixed",
                images: "sources",
                width: 800,
                height: 600,
            }

            //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
            return <GatsbyImage image={imageData} alt={props.alt}/>;
        }}
    />
);

export default Image;