import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
    const { site } = useStaticQuery(query);
    const {
        title,
        titleTemplate,
        description,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;

    const seo = {
        title: title || "kyeongsun",
        titleTemplate,
        description: description || "kyeongsun portfolio",
        image: defaultImage || "/img/selfie_sq.png/img/selfie_sq.png",
        url: `${siteUrl}`,
    };

    return (
      <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
        </Helmet>
    );
}
export default SEO

const query = graphql `
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl: url
        defaultImage: image
      }
    }
  }`;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}