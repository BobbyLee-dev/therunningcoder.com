import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const mobileNavMaxBreakPoint = `889px`;

const SubMenuToggle = styled.button`
  @media (max-width: ${mobileNavMaxBreakPoint}) {
    margin-left: 20px;
  }
  margin-right: 15px;
  margin-left: 10px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${({ isSubMenuOpen }) =>
    isSubMenuOpen ? 'flex-start' : 'flex-end'};
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 10px;
    height: 10px;

    position: relative;
    transform-origin: 1px;
    &.open-code {
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(-45deg) skewY(15deg);
    }
    &.slash {
      width: 2px;
      height: 15px;
      background: #fff;
      transform: rotate(20deg);
    }
    &.close-code {
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg) skewY(15deg);
    }
  }
`;

const SubMenu = ({ style, themeColor, item }) => {
  // Sub Menu
  const [isSubMenuToggled, setSubMenuToggle] = useState(false);
  const revealSubMenu = useSpring({
    display: isSubMenuToggled ? 'block' : 'none',
    opacity: isSubMenuToggled ? '1' : '0'
  });

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const openCode = useSpring({
    transform: isSubMenuOpen
      ? 'rotate(-225deg) skewY(0deg)'
      : 'rotate(-45deg) skewY(15deg)'
  });

  const slash = useSpring({
    transform: isSubMenuOpen
      ? 'translateY(-20px) rotate(20deg)'
      : 'translateY(0px) rotate(20deg)',
    opacity: isSubMenuOpen ? '0' : '1'
  });

  const closeCode = useSpring({
    transform: isSubMenuOpen
      ? 'rotate(135deg) skewY(0deg)'
      : 'rotate(-45deg) skewY(15deg)'
  });

  return (
    <React.Fragment>
      <SubMenuToggle
        isSubMenuOpen={isSubMenuOpen}
        onClick={e => {
          setSubMenuToggle(!isSubMenuToggled);
          setSubMenuOpen(!isSubMenuOpen);
        }}
      >
        <animated.div className="open-code" style={openCode} />
        <animated.div className="slash" style={slash} />
        <animated.div className="close-code" style={closeCode} />
      </SubMenuToggle>
      <animated.ul
        style={Object.assign(revealSubMenu, themeColor.background, {
          borderTop: `2px solid ${themeColor.highLight.color}`
        })}
      >
        {item.childItems.nodes.map(childItem => {
          return (
            <li key={childItem.id}>
              <Link
                style={themeColor.pageLink}
                to={childItem.url.replace(
                  'https://sapphireapi.com/therunningcoder',
                  ''
                )}
              >
                {childItem.label}
              </Link>
            </li>
          );
        })}
      </animated.ul>
    </React.Fragment>
  );
};

export default SubMenu;
