import React from 'react';
import styled from 'styled-components';
import TextAnimation from '../text-annimate';
import RunningMan from '../running-man';

const HomeIntroWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 20px;
  color: #000;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  line-height: 2em;
  @media (min-width: 600px) {
    padding: 100px 20px;
  }
  @media (min-width: 768px) {
    padding: 200px 20px;
  }
  h2 {
    font-size: 40px;
    text-transform: uppercase;
    font-family: 'Monoton', cursive;
    font-weight: 400;
    letter-spacing: 2px;
    word-spacing: 10px;
    margin-bottom: 70px;
    @media (min-width: 768px) {
      font-size: 70px;
    }
  }
  .svgcolor-up {
    position: absolute;
    bottom: 0;
    transform: scaleY(-1);
  }
  .grid {
    top: -400px;
    bottom: -400px;
    left: -400px;
    right: -400px;
    position: absolute;
    background-color: $color-spaaaace;
    background-image: linear-gradient($color-neonpink 1px, transparent 2px),
      linear-gradient(90deg, $color-neonpink 1px, transparent 2px);
    background-size: 3% 3%, 3% 3%;
    backround-position: 0 0, 0 0;

    transform: perspective(300px) rotateX(80deg);
  }
  @keyframes throughSpace {
    0% {
      transform: perspective(300px) rotateX(80deg) translateY(0%);
    }
    100% {
      transform: perspective(300px) rotateX(80deg) translateY(3%);
    }
  }
`;

const HomeIntro = props => {
  const colorTheme = props.colorTheme;
  return (
    <HomeIntroWrap
      style={{
        background: 'black',
        color: colorTheme.highLight.color
      }}
      className={props.class}
      id={props.id}
    >
      <h2>{props.heading}</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
      <TextAnimation text={props.content} />
      <RunningMan
        color={colorTheme.title.color}
        shadowColor={colorTheme.pageLink.color}
      />

      {/* <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="120"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-up"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff" />
      </svg> */}
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeIntroWrap>
  );
};

export default HomeIntro;
