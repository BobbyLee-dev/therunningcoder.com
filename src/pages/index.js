import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import HomeIntro from '../components/home-sections/intro';
import RecentPost from '../components/home-sections/recent-post';
import RecentProject from '../components/home-sections/recent-project';
import HomeWelcome from '../components/home-sections/welcome';
import HomeAbout from '../components/home-sections/about';
import Theme from '../components/themeColors';

export const pageQuery = graphql`
  {
    wpgraphql {
      pageBy(uri: "home") {
        homeSections {
          sections {
            __typename
            ... on WPGraphQL_Page_Homesections_Sections_Intro {
              id
              class
              heading
              content
              fieldGroupName
            }
            ... on WPGraphQL_Page_Homesections_Sections_Welcome {
              id
              class
              content
              fieldGroupName
            }
            ... on WPGraphQL_Page_Homesections_Sections_About {
              id
              class
              content
              fieldGroupName
            }
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const sections = data.wpgraphql.pageBy.homeSections.sections;
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      {sections.map(section => {
        const typeName = section.__typename;

        switch (typeName) {
          case 'WPGraphQL_Page_Homesections_Sections_Intro':
            return <HomeIntro key={section.id} {...section} />;
          case 'WPGraphQL_Page_Homesections_Sections_Welcome':
            return (
              <HomeWelcome
                colorTheme={randomTheme}
                key={section.id}
                {...section}
              />
            );
          case 'WPGraphQL_Page_Homesections_Sections_About':
            return <HomeAbout key={section.id} {...section} />;
          default:
            return <p>You done busted it.</p>;
        }
      })}
      <section>
        <h2>Most Recent Project</h2>
        <RecentProject />
      </section>
      <section>
        <h2>Most Recent Post</h2>
        <RecentPost />
      </section>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  );
};

export default Home;
