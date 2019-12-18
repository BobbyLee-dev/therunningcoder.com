import React from 'react';
import styled from 'styled-components';
import UpperFooter from './upper-footer';

const FooterWrap = styled.section`
  min-height: 400px;
`;

const Footer = ({ colorTheme }) => {
  return (
    <FooterWrap className="content" style={colorTheme.background}>
      <UpperFooter colorTheme={colorTheme} />
      {/* <LowerFooter/> */}
    </FooterWrap>
  );
};

export default Footer;
