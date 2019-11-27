import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MainMenu from './menu';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

const HeaderWrapper = styled.header`
  background: #122738;
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 100;
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
  h1 {
    font-size: 24px;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (min-width: 1400px) {
      font-size: 40px;
    }
    a {
      color: rgb(158, 255, 255);
      text-decoration: none;
    }
  }
`;

const mobileNavBreakPoint = `890px`;

const Hamburger = styled.button`
  color: #ffc600;
  background: none;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: ${mobileNavBreakPoint}) {
    display: none;
  }
`;

const Header = ({ siteTitle }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`
  });

  return (
    <HeaderWrapper>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Hamburger onClick={() => setNavOpen(!isNavOpen)}>Menu</Hamburger>
      <MainMenu style={navAnimation} />
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
