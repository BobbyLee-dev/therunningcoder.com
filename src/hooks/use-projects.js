import { graphql, useStaticQuery } from 'gatsby'

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        myProjects {
          nodes {
            myProjects {
              customExcerpt
              description
            }
            slug
            title
          }
        }
      }
    }
  `)
  return data.wpgraphql.myProjects.nodes.map(project => ({
    title: project.title,
    slug: 'projects/' + project.slug,
    custonExcerpt: project.myProjects.customExcerpt,
  }))
  // return data.wpgraphql.posts.nodes
}

export default useProjects
