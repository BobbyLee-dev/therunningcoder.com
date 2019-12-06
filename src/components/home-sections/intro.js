import React from 'react';
import styled from 'styled-components';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch';

const HomeIntroWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20% 20px 20px;
  background-color: rgb(27, 36, 47);
  color: #fff;
  min-height: calc(100vh - 52px);
  @media (min-width: 890px) {
    min-height: calc(100vh - 58px);
  }
  @media (min-width: 1400px) {
    min-height: calc(100vh - 64px);
  }
`;

const HomeIntro = props => {
  return (
    <HomeIntroWrap className={props.class} id={props.id}>
      <h2>{props.heading}</h2>
      <div class="p" dangerouslySetInnerHTML={{ __html: props.content }} />
      <P5Wrapper sketch={sketch} color={'rgb(130, 216, 216)'} />
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeIntroWrap>
  );
};

export default HomeIntro;
