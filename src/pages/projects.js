import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPreview from '../components/project-preview'
import useProjects from '../hooks/use-projects'

const Blog = () => {
  const projects = useProjects()
  console.log(projects)

  return (
    <Layout>
      <SEO title="About Me" />
      <h1>Hi from the Projects page</h1>
      {projects.map(project => (
        <ProjectPreview key={project.id} project={project} />
      ))}
    </Layout>
  )
}

export default Blog
