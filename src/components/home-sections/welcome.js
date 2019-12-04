import React from 'react';
import styled from 'styled-components';

const WelcomeWrap = styled.section``;

const HomeWelcome = props => (
  <WelcomeWrap className={props.class} id={props.id}>
    <h2>{props.heading}</h2>
    <div class="p" dangerouslySetInnerHTML={{ __html: props.content }} />
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
  </WelcomeWrap>
);

export default HomeWelcome;
