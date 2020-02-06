import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Theme from '../components/themeColors';

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        slug
        title
        content
        shortLongPost {
          customExcerpt
          longVersion
          shortVersion
        }
        id
        featuredImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(traceSVG: { color: "#f00e2e" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

const CodePostTemplate = ({
  data: {
    wpgraphql: { post }
  }
}) => {
  const randomTheme = Theme();

  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      {console.log(post)}
      <h1>{post.title}</h1>

      <Img
        alt={post.featuredImage.altText}
        fluid={post.featuredImage.imageFile.childImageSharp.fluid}
      />
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: post.shortLongPost.shortVersion.replace(/"/g, "'")
        }}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      {/* <div>{post.shortLongPost.shortVersion}</div> */}

      <Link to="/blog/code">Back to Code</Link>
    </Layout>
  );
};

export default CodePostTemplate;
