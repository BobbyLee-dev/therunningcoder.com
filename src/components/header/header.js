import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import MainMenu from './menu';
// import Theme from './themeColors';

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

const themeColors = [
  {
    theme: {
      name: 'Dracula',
      link: 'https://draculatheme.com/visual-studio-code/'
    },
    background: {
      backgroundColor: 'rgba(33, 34, 44, 1)'
    },
    title: {
      color: 'rgba(139, 233, 253, 1)'
    },
    titleHover: {
      color: 'rgba(139, 233, 253, .7)'
    },
    pageLink: {
      color: 'rgba(80, 250, 123, 1)'
    },
    pageLinkHover: {
      color: 'rgba(80, 250, 123, .7)'
    },
    highLight: {
      color: 'rgba(255, 121, 198, 1)'
    },
    highLightHover: {
      color: 'rgba(255, 121, 198, .7)'
    }
  },
  {
    theme: {
      name: 'Night Owl',
      link:
        'https://marketplace.visualstudio.com/items?itemName=sdras.night-owl'
    },
    background: {
      backgroundColor: 'rgba(1, 22, 39, 1)'
    },
    title: {
      color: 'rgba(127, 219, 202, 1)'
    },
    titleHover: {
      color: 'rgba(127, 219, 202, .7)'
    },
    pageLink: {
      color: 'rgba(173, 219, 103, 1)'
    },
    pageLinkHover: {
      color: 'rgba(173, 219, 103, .7)'
    },
    highLight: {
      color: 'rgba(199, 146, 234, 1)'
    },
    highLightHover: {
      color: 'rgba(199, 146, 234, .7)'
    }
  },
  {
    theme: {
      name: 'Cobalt2',
      link:
        'https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2'
    },
    background: {
      backgroundColor: 'rgba(25, 53, 73, 1)'
    },
    title: {
      color: 'rgba(158, 255, 255, 1)'
    },
    titleHover: {
      color: 'rgba(158, 255, 255, .7)'
    },
    pageLink: {
      color: 'rgba(255, 198, 0, 1)'
    },
    pageLinkHover: {
      color: 'rgba(255, 198, 0, .7)'
    },
    highLight: {
      color: 'rgba(255, 98, 140, 1)'
    },
    highLightHover: {
      color: 'rgba(255, 98, 140, .7)'
    }
  },
  {
    theme: {
      name: 'Level Up 2',
      link: 'https://vscodethemes.com/e/leveluptutorials.theme-levelup'
    },
    background: {
      backgroundColor: '#373142'
    },
    title: {
      color: 'rgba(130, 216, 216, 1)'
    },
    titleHover: {
      color: 'rgba(130, 216, 216, .7)'
    },
    pageLink: {
      color: 'rgba(203, 229, 108, 1)'
    },
    pageLinkHover: {
      color: 'rgba(203, 229, 108, .7)'
    },
    highLight: {
      color: 'rgba(246, 123, 123, 1)'
    },
    highLightHover: {
      color: 'rgba(246, 123, 123, .7)'
    }
  },
  {
    theme: {
      name: 'Shades of Purple',
      link: 'https://vscodethemes.com/e/ahmadawais.shades-of-purple'
    },
    background: {
      backgroundColor: 'rgb(45, 43, 85)'
    },
    title: {
      color: 'rgba(158, 255, 255, 1)'
    },
    titleHover: {
      color: 'rgba(158, 255, 255, .7)'
    },
    pageLink: {
      color: 'rgba(250, 208, 0, 1)'
    },
    pageLinkHover: {
      color: 'rgba(250, 208, 0, .7)'
    },
    highLight: {
      color: 'rgba(58, 217, 0, 1)'
    },
    highLightHover: {
      color: 'rgba(58, 217, 0, .7)'
    }
  }
];

const Header = ({ siteTitle }) => {
  let randomTheme =
    themeColors[Math.floor(Math.random() * themeColors.length + 0)];
  console.log(randomTheme);

  return (
    <>
      <HeaderWrapper
        style={randomTheme.background}
        test={console.log('test header werapper ')}
        testing={console.log(randomTheme.background)}
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
