import React from 'react';
import styled from 'styled-components';

const HomeAbout = props => {
  const colorTheme = props.colorTheme;

  const HomeAboutWrap = styled.section`
    .about-content {
      max-width: 700px;
      margin: auto;
      text-align: left;
      line-height: 1.75em;
      text-align: center;
      h2 {
        margin-bottom: 1em;
        @media (min-width: 768px) {
          font-size: 2em;
        }
        @media (min-width: 1200px) {
          font-size: 2.75em;
        }
      }
      .sub-heading {
        font-family: cursive;
        /* font-style: italic; */
        font-size: 1.5em;
        margin-bottom: 1em;
      }
      a {
        color: ${colorTheme.highLight.color};
      }
      p {
        max-width: 500px;
        margin: auto;
      }
    }
  `;

  return (
    <HomeAboutWrap className="content">
      <div
        className="about-content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeAboutWrap>
  );
};

export default HomeAbout;
