import React from 'react';
import styled from 'styled-components';

const WelcomeWrap = styled.section``;

const HomeWelcome = props => (
  <WelcomeWrap className={props.class} id={props.id}>
    <div dangerouslySetInnerHTML={{ __html: props.content }} />
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
  </WelcomeWrap>
);

export default HomeWelcome;
