import React from 'react';
import { graphql } from 'gatsby';
// import styled from 'styled-components';

const UpperFooter = ({ colorTheme }) => {
  return (
    <div>
      <h2 style={colorTheme.title}>Contact</h2>
      <p style={colorTheme.pageLink}>
        Have an Idea, question or just want to say Hi? Get in touch, I'd love to
        hear from you!
      </p>
    </div>
  );
};

export default UpperFooter;
