import React from 'react';
// import Goo from '.././blob/blob';
// import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components';

const HomeIntroWrap = styled.section`
  /* min-height: 100vh;
  position: relative; */
`;

const HomeIntro = props => {
  return (
    <HomeIntroWrap>
      {/* <Goo /> */}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </HomeIntroWrap>
  );
};

export default HomeIntro;
