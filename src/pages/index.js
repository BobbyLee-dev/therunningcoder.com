import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import HomeIntro from '../components/home-sections/intro'
import RecentPost from '../components/home-sections/recent-post'
import RecentProject from '../components/home-sections/recent-project'
import HomeWelcome from '../components/home-sections/welcome'

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
              content
              fieldGroupName
              heading
            }
            ... on WPGraphQL_Page_Homesections_Sections_Welcome {
              id
              class
              content
              fieldGroupName
              heading
            }
          }
        }
      }
    }
  }
`

const Home = ({ data }) => {
  const sections = data.wpgraphql.pageBy.homeSections.sections

  return (
    <Layout>
      <SEO title="Home" />
      {sections.map(section => {
        const typeName = section.__typename

        switch (typeName) {
          case 'WPGraphQL_Page_Homesections_Sections_Intro':
            return <HomeIntro key={section.id} {...section} />
          case 'WPGraphQL_Page_Homesections_Sections_Welcome':
            return <HomeWelcome key={section.id} {...section} />
          default:
            return <p>You done busted it.</p>
        }
      })}
      <RecentProject />
      <RecentPost />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default Home
