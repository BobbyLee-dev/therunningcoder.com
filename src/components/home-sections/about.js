import React from 'react';
import styled from 'styled-components';

const AboutWrap = styled.section``;

const HomeAbout = props => (
  <AboutWrap className={props.class} id={props.id}>
    <div class="p" dangerouslySetInnerHTML={{ __html: props.content }} />
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
  </AboutWrap>
);

export default HomeAbout;
