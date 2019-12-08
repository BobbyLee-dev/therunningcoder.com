import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
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

const PostTemplage = ({
  data: {
    wpgraphql: { post }
  }
}) => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      <h1>{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <Link to="/blog">Back to Blog</Link>
    </Layout>
  );
};

export default PostTemplage;
