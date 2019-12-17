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
        homeSections {
          sections {
            __typename

            ... on WPGraphQL_Page_Homesections_Sections_Welcome {
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
          case 'WPGraphQL_Page_Homesections_Sections_Welcome':
            return (
              <HomeWelcome
                colorTheme={randomTheme}
                key={section.id}
                {...section}
              />
            );

          default:
            return <p>You done busted it.</p>;
        }
      })}
      <section className="content">
        <h2>Recent Projects</h2>
        <RecentProject />
        <Link className="button" to="/projects">
          All Projects
        </Link>
      </section>
      <section className="content">
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
