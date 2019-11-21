import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'

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
  `)

  const navItemObjects = mainNav.wpgraphql.menus.nodes[0].menuItems.nodes

  return (
    <nav
      style={{
        color: `#fff`,
      }}
    >
      <ul>
        {navItemObjects.map(item => {
          return (
            <React.Fragment key={item.id}>
              <li>
                <Link
                  style={{
                    color: `#fff`,
                  }}
                  to={(() => {
                    if (item.url.includes('sapphireapi.com')) {
                      return item.url.replace(
                        'https://sapphireapi.com/therunningcoder',
                        ''
                      )
                    } else {
                      return item.url // make into no link somehow
                    }
                  })()}
                >
                  {item.label}
                </Link>
              </li>
              {item.childItems.nodes.length > 0 && (
                <ul>
                  {item.childItems.nodes.map(childItem => {
                    return (
                      <li key={childItem.id}>
                        <Link
                          style={{
                            color: `#fff`,
                          }}
                          to={childItem.url.replace(
                            'https://sapphireapi.com/therunningcoder',
                            ''
                          )}
                        >
                          {childItem.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainMenu
