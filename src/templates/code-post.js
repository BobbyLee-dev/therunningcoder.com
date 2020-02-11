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
        id
        slug
        date
        modified
        author {
          firstName
          lastName
        }
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

  const hasAuthor = () => {
    const firstName = post.author.firstName ? post.author.firstName : '';
    const lastName = post.author.lastName ? post.author.lastName : '';

    if (firstName || lastName) {
      return (
        <div className="author">
          <div>Author: </div>
          <div>
            {firstName} {lastName}
          </div>
        </div>
      );
    }
  };

  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />

      <h1>{post.title}</h1>

      {/* ======== Image ======== */}
      {post.featuredImage && (
        <Img
          alt="Featured Image"
          fluid={post.featuredImage.imageFile.childImageSharp.fluid}
        />
      )}
      {/* ======== End  Image ======== */}

      {/* ======= Author ========= */}
      {hasAuthor()}
      {/* ======= End Author ========= */}

      {/* ======= Date ======== */}
      <div className="date-published">Published on: {post.date}</div>
      {/* ======= End Date ======== */}

      {/* ====== Last Modified ======= */}
      <div className="date-published">Last Modified: {post.modified}</div>
      {/* ====== Last Modified ======= */}

      {/* ======== Links ======== */}
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
      {/* ======== End Links ======== */}

      {/* ======= Custom Excerpt  ======== */}
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
      {/* ======= End Custom Excerpt  ======== */}

      {/* ========= Tags ======== */}
      {post.tags.nodes.length > 0 && (
        <>
          <h2>Tags</h2>

          {post.tags.nodes.map((tag, index) => {
            return (
              <div
                key={post.id + index}
                className="tag"
                dangerouslySetInnerHTML={{
                  __html: tag.name
                }}
              />
            );
          })}
        </>
      )}
      {/* ========= End Tags ======== */}

      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      {/* <div>{post.shortLongPost.shortVersion}</div> */}

      <Link to="/blog/code">Back to Code</Link>
    </Layout>
  );
};

export default CodePostTemplate;
