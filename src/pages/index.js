import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import RecentPost from '../components/page-home/recent-post';
import RecentProject from '../components/page-home/recent-project';
import HomeWelcome from '../components/page-home/welcome';
import Theme from '../components/themeColors';
import Wapuu from '../components/wapuu';
import styled from 'styled-components';
import HomeAbout from '../components/page-home/home-about';

const BuiltWith = styled.section`
  /* max-width: 300px; */
  margin: 0 auto 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 1.5em;
  > div {
    width: 300px;
    max-width: 100%;
    margin: 10px;
  }
  .built-text {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const pageQuery = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        homePage {
          welcome
          homeAbout
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
      <HomeAbout content={sections.homeAbout} colorTheme={randomTheme} />
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
      <BuiltWith className="content">
        <div className="built-text">
          This site is build with Gatasby and WordPress.
        </div>
        <Image />
        <Wapuu />
      </BuiltWith>
    </Layout>
  );
};

export default Home;
