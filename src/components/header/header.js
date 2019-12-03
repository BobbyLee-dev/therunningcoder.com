import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';
import Theme from './themeColors';

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  @media (min-width: 1400px) {
    padding: 10px 40px;
  }
  @media (min-width: 2000px) {
    padding: 10px 80px;
  }
  .site-title {
    z-index: 10;
    text-decoration: none;
    h1 {
      font-size: 22px;
      margin: 0;
      @media (min-width: 768px) {
        font-size: 30px;
      }
      @media (min-width: 1400px) {
        font-size: 40px;
      }
    }
  }
`;

const ThemeName = styled.a`
  position: absolute;
  top: 60px;
  right: 20px;
  font-size: 12px;
  font-style: italic;
`;

const Header = ({ siteTitle }) => {
  let randomTheme = Theme();

  return (
    <>
      <HeaderWrapper
        style={randomTheme.background}
        test={console.log('test header werapper')}
      >
        <Link className="site-title" style={randomTheme.title} to="/">
          <h1 style={randomTheme.title}>{`{ ${siteTitle} }`}</h1>
        </Link>

        <MainMenu
          themeColor={randomTheme}
          test={console.log('test MainMenu from header.js')}
        />
      </HeaderWrapper>
      <ThemeName
        href={randomTheme.theme.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Nav Theme: {randomTheme.theme.name}
      </ThemeName>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
