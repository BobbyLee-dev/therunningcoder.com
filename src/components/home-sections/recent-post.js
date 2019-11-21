import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query posts {
        wpgraphql {
          posts {
            nodes {
              uri
              title
              shortLongPost {
                longVersion
                shortVersion
                customExcerpt
              }
            }
          }
        }
      }
    `}
    render={data => (
      <pre>{JSON.stringify(data.wpgraphql.posts.nodes[0], null, 2)}</pre>
    )}
  />
)
