// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  // Blog Posts
  const result = await graphql(`
    query {
      wpgraphql {
        posts {
          nodes {
            slug
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create pages', result.errors)
  }

  const posts = result.data.wpgraphql.posts.nodes

  posts.forEach(post => {
    actions.createPage({
      path: 'blog/' + post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `/${'blog/' + post.slug}/`,
        id: post.id,
      },
    })
  })

  // My Projects
  const projectsResult = await graphql(`
    query {
      wpgraphql {
        myProjects {
          nodes {
            slug
            title
            id
          }
        }
      }
    }
  `)

  if (projectsResult.errors) {
    reporter.panic('failed to create pages', projectsResult.errors)
  }

  const myProjects = projectsResult.data.wpgraphql.myProjects.nodes

  myProjects.forEach(project => {
    actions.createPage({
      path: 'projects/' + project.slug,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: `/${'projects/' + project.slug}/`,
        id: project.id,
      },
    })
  })
}
