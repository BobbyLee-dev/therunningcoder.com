import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Theme from '../components/themeColors';

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      myProject(id: $id) {
        slug
        title
        content
        myProjects {
          customExcerpt
          description
        }
      }
    }
  }
`;

const ProjectTemplate = ({
  data: {
    wpgraphql: { myProject }
  }
}) => {
  const randomTheme = Theme();
  return (
    <Layout colorTheme={randomTheme}>
      <SEO title="Home" />
      <h1>{myProject.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: myProject.content }}
      />
      <pre>{JSON.stringify(myProject, null, 2)}</pre>
      <Link to="/projects">Back to Projects</Link>
    </Layout>
  );
};

export default ProjectTemplate;
