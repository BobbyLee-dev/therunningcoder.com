/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

// import PropTypes from 'prop-types';

import Header from './header/header';
import './layout.css';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children, colorTheme }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Header colorTheme={colorTheme} siteTitle={title} />
      <div style={{}}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.any
// };

export default Layout;
