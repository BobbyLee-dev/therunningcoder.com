import { useStaticQuery, graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const MenuListItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin: 0;
  li {
    margin: 0;
    a {
      color: rgb(255, 198, 0);
      padding: 10px 20px;
      text-decoration: none;
    }
    &.has-sub-menu {
      position: relative;
      ul {
        top: 45px;
        list-style: none;
        background: red;
        position: absolute;
        margin: 0;
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

const MainMenu = ({ siteTitle }) => {
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
  const fade = useSpring({
    display: isToggled ? 'block' : 'none'
  });

  return (
    <nav>
      <MenuListItems>
        {navItemObjects.map(item => {
          return (
            <React.Fragment key={item.id}>
              <li
                className={
                  item.childItems.nodes.length > 0 ? 'has-sub-menu' : ''
                }
                onMouseEnter={
                  item.childItems.nodes.length > 0
                    ? () => setToggle(!isToggled)
                    : ''
                }
                onMouseLeave={
                  item.childItems.nodes.length > 0
                    ? () => setToggle(!isToggled)
                    : ''
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
                  <animated.ul style={fade}>
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
    </nav>
  );
};

export default MainMenu;
