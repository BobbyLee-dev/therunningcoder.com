import React from 'react';
import { graphql, Link } from 'gatsby';

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
      <h1>{post.title}</h1>
      <h2>test</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.shortLongPost.shortVersion }}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <div>{post.shortLongPost.shortVersion}</div>

      <Link to="/blog">Back to Blog</Link>
    </Layout>
  );
};

export default CodePostTemplate;
