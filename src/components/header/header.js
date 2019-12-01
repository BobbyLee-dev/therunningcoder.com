import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';

const HeaderWrapper = styled.header`
  background: #122738;
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
  h1 {
    font-size: 22px;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (min-width: 1400px) {
      font-size: 40px;
    }
    a {
      /* color: rgb(158, 255, 255); */
      text-decoration: none;
    }
  }
`;

const darkTheme = [
  {
    title: {
      color: 'red'
    },
    page: {
      color: 'red'
    }
  },
  {
    title: {
      color: 'blue'
    },
    page: {
      color: 'blue'
    }
  },
  {
    title: {
      color: 'green'
    },
    page: {
      color: 'green'
    }
  },
  {
    title: {
      color: 'black'
    },
    page: {
      color: 'black'
    }
  }
];

const Header = ({ siteTitle }) => {
  let randomTheme = Math.floor(Math.random() * darkTheme.length + 0);

  return (
    <HeaderWrapper>
      <h1>
        <Link
          style={darkTheme[randomTheme].title}
          to="/"
        >{`{ ${siteTitle} }`}</Link>
      </h1>
      <MainMenu themeColor={darkTheme[randomTheme]} />
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
