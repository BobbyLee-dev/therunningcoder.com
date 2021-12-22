import React from 'react';
import styled from 'styled-components';
import UpperFooter from './upper-footer';
import LowerFooter from './lower-footer';

const FooterWrap = styled.footer``;

const Footer = ({ colorTheme }) => {
  return (
    <FooterWrap style={colorTheme.background}>
      <UpperFooter colorTheme={colorTheme} />
      <LowerFooter colorTheme={colorTheme} />
			<h2>hello</h2>
    </FooterWrap>
  );
};

export default Footer;
