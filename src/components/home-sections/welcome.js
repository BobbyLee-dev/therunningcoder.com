import React from 'react';
import styled from 'styled-components';

const WelcomeWrap = styled.section`
  position: relative;
  font-family: monospace;
  font-size: 18px;
  padding: 100px 0;
  @media (min-width: 768px) {
    font-size: 22px;
    padding: 200px 0;
  }
  .welcome-content {
    padding: 20px;
    max-width: 900px;
    margin: auto;
    text-align: center;
    line-height: 2em;
    a {
      color: #fff;
      z-index: 30;
      position: relative;
    }
  }
  .svgcolor {
    position: absolute;
    top: 0;
  }
  .svgcolor-2 {
    position: absolute;
    bottom: 0;
    transform: scaleY(-1);
  }
`;

const HomeWelcome = props => {
  const colorTheme = props.colorTheme;
  return (
    <WelcomeWrap
      style={colorTheme.background}
      className={props.class}
      id={props.id}
    >
      {/* <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="120"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff" />
      </svg> */}

      <div
        style={colorTheme.pageLink}
        className="welcome-content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      {/* <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="120"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-2"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff" />
      </svg> */}
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </WelcomeWrap>
  );
};

export default HomeWelcome;
