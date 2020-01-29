import React from 'react';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import CodePreview from '../../components/code-preview';
import useCodePosts from '../../hooks/use-code-posts';
import Theme from '../../components/themeColors';

const Code = () => {
  const codePosts = useCodePosts();
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="About Me" />
      <h1>Hi from the Code page</h1>
      {codePosts.map(post => (
        <CodePreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Code;
