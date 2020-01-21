import React from 'react';
import styled from 'styled-components';

const HomeWelcome = props => {
  const colorTheme = props.colorTheme;
  console.log(colorTheme);

  const WelcomeWrap = styled.section`
    position: relative;
    font-family: monospace;
    font-size: 18px;
    padding: 100px 0 300px;

    overflow: hidden;
    @media (min-width: 768px) {
      font-size: 22px;
      padding: 150px 0;
      padding-bottom: 300px;
    }
    .welcome-content {
      padding: 20px;
      max-width: 1000px;
      margin: auto;
      text-align: center;
      line-height: 2em;
      a {
        text-decoration: none;
        color: #fff;
        z-index: 30;
        position: relative;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .grid {
      top: 0;
      bottom: -200px;
      left: -200px;
      right: -200px;
      position: absolute;
      background-image: linear-gradient(
          ${colorTheme.highLight.color} -8px,
          transparent 2px
        ),
        linear-gradient(
          90deg,
          ${colorTheme.highLight.color} 1px,
          transparent 2px
        );
      background-size: 3% 3%, 3% 3%;
      transform: perspective(300px) rotateX(80deg);
      animation: throughSpace 0.5s linear;
      animation-iteration-count: infinite;
    }
    @keyframes throughSpace {
      0% {
        transform: perspective(400px) rotateX(80deg) translateY(0%);
      }
      100% {
        transform: perspective(400px) rotateX(80deg) translateY(3%);
      }
    }
  `;

  return (
    <WelcomeWrap
      style={colorTheme.background}
      className={props.class}
      id={props.id}
    >
      <div className="grid" />
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
