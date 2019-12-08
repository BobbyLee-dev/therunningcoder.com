import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Theme from '../../components/themeColors';

const Resume = () => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Resume" />
      <h1>Hi from the Resume Page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Resume;
