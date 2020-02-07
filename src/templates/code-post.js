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
        tags {
          nodes {
            name
          }
        }
        title
        content
        shortLongPost {
          customExcerpt
          longVersion
          shortVersion
        }
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
  console.log(post);

  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      {console.log(post)}
      <h1>{post.title}</h1>
      {post.featuredImage && (
        <Img
          alt="Featured Image"
          fluid={post.featuredImage.imageFile.childImageSharp.fluid}
        />
      )}

      {/* Links */}
      {post.shortLongPost.shortVersion && (
        <>
          <h2>Code</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: post.shortLongPost.shortVersion.replace(/"/g, "'")
            }}
          />
        </>
      )}

      {/* Custom Excerpt */}
      {post.shortLongPost.customExcerpt && (
        <>
          <h2>Description</h2>
          <div
            className="excerpt-wrap"
            dangerouslySetInnerHTML={{
              __html: post.shortLongPost.customExcerpt.replace(/"/g, "'")
            }}
          />
        </>
      )}

      {/* Tags */}
      {post.tags.nodes.length > 0 && (
        <>
          <h2>Tags</h2>

          {post.tags.nodes.map(tag => {
            return (
              <div
                className="tag"
                dangerouslySetInnerHTML={{
                  __html: tag.name
                }}
              />
            );
          })}
        </>
      )}

      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      {/* <div>{post.shortLongPost.shortVersion}</div> */}

      <Link to="/blog/code">Back to Code</Link>
    </Layout>
  );
};

export default CodePostTemplate;
