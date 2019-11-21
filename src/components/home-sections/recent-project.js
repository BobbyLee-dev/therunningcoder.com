import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query projects {
        wpgraphql {
          myProjects {
            nodes {
              title
              uri
              myProjects {
                customExcerpt
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <pre>{JSON.stringify(data.wpgraphql.myProjects.nodes[0], null, 2)}</pre>
    )}
  />
)
