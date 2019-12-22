import React from 'react';
import styled from 'styled-components';
import UpperFooter from './upper-footer';
import LowerFooter from './lower-footer';

const FooterWrap = styled.section``;

const Footer = ({ colorTheme }) => {
  return (
    <FooterWrap style={colorTheme.background}>
      <UpperFooter colorTheme={colorTheme} />
      <LowerFooter colorTheme={colorTheme} />
    </FooterWrap>
  );
};

export default Footer;
