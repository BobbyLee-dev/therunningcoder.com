import React from 'react';
import styled from 'styled-components';
// import P5Wrapper from 'react-p5-wrapper';
// import Sketch from '../sketch';
import SketchWrapper from '../sketchWrapper';
import { Link } from 'gatsby';

const HomeIntroWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 20px 20px;
  background: radial-gradient(
    circle,
    rgba(51, 12, 131, 1) 0%,
    rgba(55, 174, 180, 1) 100%
  );
  color: #fff;
  min-height: calc(100vh - 52px);
  @media (min-width: 890px) {
    min-height: calc(100vh - 58px);
  }
  @media (min-width: 1400px) {
    min-height: calc(109vh);
  }
  .svgcolor-up {
    position: absolute;
    bottom: 0;
    transform: scaleY(-1);
  }
  .current-sketch {
    /* background: red; */
    display: block;
    position: absolute;
    bottom: -40px;
    text-align: center;
    z-index: 10;
    h3 {
      margin-bottom: 10px;
      color: black;
    }
    a {
      color: black;
    }
  }
`;

const HomeIntro = props => {
  return (
    <HomeIntroWrap className={props.class} id={props.id}>
      <h2>{props.heading}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      {/* <P5Wrapper sketch={Sketch} /> */}
      <SketchWrapper />
      <div className="current-sketch">
        <h3>Current Sketch:</h3>
        <Link to="/">Test Sketch</Link>
      </div>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="120"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-up"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff" />
      </svg>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeIntroWrap>
  );
};

export default HomeIntro;
