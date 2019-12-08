import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Theme from '../components/themeColors';

const NotFoundPage = () => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
