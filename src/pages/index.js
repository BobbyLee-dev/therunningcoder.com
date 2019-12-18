import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import RecentPost from '../components/page-home/recent-post';
import RecentProject from '../components/page-home/recent-project';
import HomeWelcome from '../components/page-home/welcome';
import Theme from '../components/themeColors';

export const pageQuery = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        homePage {
          welcome
          fieldGroupName
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const sections = data.wpgraphql.pageBy.homePage;
  const randomTheme = Theme();

  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      <HomeWelcome content={sections.welcome} colorTheme={randomTheme} />
      <section className="content">
        <h2>Recent Projects</h2>
        <RecentProject />
        <Link className="button" to="/projects">
          All Projects
        </Link>
      </section>
      <section className="content">
        <h2>Recent Posts</h2>
        <RecentPost />
      </section>

      <section
        className="content"
        style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: 'auto' }}
      >
        <Image />
      </section>
    </Layout>
  );
};

export default Home;
