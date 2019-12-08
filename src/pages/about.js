import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Theme from '../components/themeColors';

const About = () => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="About" />
      <h1>Hi from the About page</h1>
    </Layout>
  );
};

export default About;
