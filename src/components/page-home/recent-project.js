import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const ProjectsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .single-project {
    border: solid;
    width: 300px;
    padding: 20px;
    margin: 10px;
  }
`;

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
    render={data => {
      const firstThreeProjects = data.wpgraphql.myProjects.nodes.slice(0, 3);
      console.log(firstThreeProjects);

      return (
        <ProjectsWrap>
          {firstThreeProjects.map(project => {
            return (
              <div className="single-project" key={project.uri}>
                <h3>{project.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.myProjects.customExcerpt
                  }}
                />
                {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
                <Link to={`/projects/${project.uri}`}>Read More</Link>
              </div>
            );
          })}
        </ProjectsWrap>
      );
    }}
  />
);
