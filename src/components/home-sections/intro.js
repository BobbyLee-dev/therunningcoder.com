import React from 'react';
import styled from 'styled-components';

const HomeIntroWrap = styled.section`
  /* min-height: 100vh;
  position: relative; */
`;

const HomeIntro = props => {
  return (
    <HomeIntroWrap className={props.class} id={props.id}>
      <h2>{props.heading}</h2>
      <div class="p" dangerouslySetInnerHTML={{ __html: props.content }} />

      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeIntroWrap>
  );
};

export default HomeIntro;
