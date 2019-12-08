import React from 'react';
import styled from 'styled-components';

const AboutWrap = styled.section``;

const HomeAbout = props => (
  <AboutWrap className={`content ${props.class}`} id={props.id}>
    <div dangerouslySetInnerHTML={{ __html: props.content }} />
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
  </AboutWrap>
);

export default HomeAbout;
