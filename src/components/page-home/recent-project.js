import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .single-project {
    width: 300px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    @media (min-width: 768px) {
      margin: 20px;
    }
    .project-img {
      margin-bottom: 15px;
    }
  }
`;

export default props => (
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
              featuredImage {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(traceSVG: { color: "#f00e2e" }) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const firstThreeProjects = data.wpgraphql.myProjects.nodes.slice(0, 3);

      return (
        <ProjectsWrap>
          {firstThreeProjects.map((project, index) => {
            return (
              <div className="single-project" key={project.uri}>
                <h3>{project.title}</h3>
                {project.featuredImage && (
                  <div className="project-img">
                    <Img
                      alt={project.featuredImage.altText}
                      fluid={
                        project.featuredImage.imageFile.childImageSharp.fluid
                      }
                    />
                  </div>
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: project.myProjects.customExcerpt
                  }}
                />
                {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
                <Link to={`/projects/${project.uri}`}>View Project</Link>
              </div>
            );
          })}
        </ProjectsWrap>
      );
    }}
  />
);
