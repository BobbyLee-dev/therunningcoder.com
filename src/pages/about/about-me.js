import React from 'react';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import Theme from '../../components/themeColors';

const AboutMePage = () => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="About Me" />
      <h1>Hi from the AboutMe page</h1>
    </Layout>
  );
};

export default AboutMePage;
