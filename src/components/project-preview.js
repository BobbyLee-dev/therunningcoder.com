import React from 'react'
import { Link } from 'gatsby'

const ProjectPreview = ({ project }) => (
  <article>
    <h2>
      <Link to={project.slug}>{project.title}</Link>
    </h2>
    <div>{project.custonExcerpt}</div>
    <Link to={project.slug}>read this project &rarr;</Link>
  </article>
)

export default ProjectPreview
