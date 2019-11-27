import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const mobileNavBreakPoint = `890px`;

const MainNav = styled(animated.nav)`
  background: #122738;
  @media (max-width: 889px) {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @media (min-width: ${mobileNavBreakPoint}) {
    display: block;
    transform: translate3d(0, 0px, 0px) !important;
  }
`;

const MenuListItems = styled.ul`
  /* display: none; */
  list-style: none;
  margin: 0;
  @media (min-width: ${mobileNavBreakPoint}) {
    display: flex;

    justify-content: flex-end;
  }
  li {
    margin: 0;
    a {
      color: #ffc600;
      padding: 10px 20px;
      text-decoration: none;
    }
    &.has-sub-menu {
      position: relative;
      a {
        padding-right: 5px;
      }
      ul {
        @media (min-width: 768px) {
          top: 39px;
        }
        @media (min-width: 1400px) {
          top: 45px;
        }
        list-style: none;
        background: #122738;
        position: absolute;
        margin: 0;
        border-top: 2px solid rgb(255, 120, 248);
        li {
          a {
            padding: 10px 20px;
            width: max-content;
            display: block;
          }
        }
      }
    }
  }
`;

const SubMenuButton = styled.span`
  color: #ffc600;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const MainMenu = ({ style }) => {
  const mainNav = useStaticQuery(graphql`
    query MainNavQuery {
      wpgraphql {
        menus {
          nodes {
            menuItems {
              nodes {
                url
                label
                id
                childItems {
                  nodes {
                    label
                    url
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const navItemObjects = mainNav.wpgraphql.menus.nodes[0].menuItems.nodes;

  const [isToggled, setToggle] = useState(false);
  const reveal = useSpring({
    display: isToggled ? 'block' : 'none',
    opacity: isToggled ? '1' : '0'
  });

  return (
    <MainNav style={style}>
      <MenuListItems>
        {navItemObjects.map(item => {
          return (
            <React.Fragment key={item.id}>
              <li
                className={
                  item.childItems.nodes.length > 0 ? 'has-sub-menu' : ''
                }
              >
                <Link
                  to={(() => {
                    if (item.url.includes('sapphireapi.com')) {
                      return item.url.replace(
                        'https://sapphireapi.com/therunningcoder',
                        ''
                      );
                    } else {
                      return item.url; // make into no link somehow
                    }
                  })()}
                >
                  {item.label}
                </Link>
                {item.childItems.nodes.length > 0 && (
                  <SubMenuButton onClick={() => setToggle(!isToggled)}>
                    {'</>'}
                  </SubMenuButton>
                )}

                {item.childItems.nodes.length > 0 && (
                  <animated.ul style={reveal}>
                    {item.childItems.nodes.map(childItem => {
                      return (
                        <li key={childItem.id}>
                          <Link
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
                )}
              </li>
            </React.Fragment>
          );
        })}
      </MenuListItems>
    </MainNav>
  );
};

export default MainMenu;
