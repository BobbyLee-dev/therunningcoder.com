import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { redirectTo } from '@reach/router';

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    margin-bottom: 10px;
    input {
      width: 100%;
      height: 40px;
      /* background: #1e242c; */
      background: none;
      border: none;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      margin-bottom: 5px;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
    textarea {
      width: 100%;
      height: 150px;
      padding: 10px;
      /* background: #1e242c; */
      background: none;
      border: none;
      font-size: 16px;
      color: #fff;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
  button[type='submit'] {
    width: fit-content;
    padding: 5px 20px;
    align-self: flex-end;
  }
`;

const UpperFooter = ({ colorTheme }) => {
  const borderStyle = { border: `1px solid ${colorTheme.highLight.color}` };

  return (
    <div>
      <h2 style={colorTheme.title}>Contact</h2>
      <p style={colorTheme.pageLink}>
        Have an Idea, question or just want to say Hi? Get in touch, I'd love to
        hear from you!
      </p>

      <ContactForm name="footer-contact" method="POST" data-netlify="true">
        <label style={borderStyle}>
          <input placeholder="Name" type="text" name="name" required />
        </label>
        <label style={borderStyle}>
          <input placeholder="Email" type="email" name="email" required />
        </label>
        <label style={borderStyle}>
          <textarea placeholder="Message" name="message" required />
        </label>
        <button type="submit">Send</button>
      </ContactForm>
    </div>
  );
};

export default UpperFooter;
