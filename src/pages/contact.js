import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Theme from '../components/themeColors';

const Contact = () => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Contact" />
      <h1>Hi from the Contact Page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Contact;
