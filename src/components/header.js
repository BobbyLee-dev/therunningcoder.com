import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import MainMenu from './menu';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: rgb(26, 29, 39);
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  h1 {
    margin: 0;
    a {
      color: rgb(158, 255, 255);
      text-decoration: none;
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <MainMenu />
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
