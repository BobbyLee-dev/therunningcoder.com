import React from 'react';
import styled from 'styled-components';

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
      border-radius: 5px;
      &::placeholder,
      &::-webkit-input-placeholder {
        color: #fff;
      }
      &:-internal-autofill-selected {
        background-color: rgba(255, 255, 255, 0) !important;
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
      border-radius: 5px;
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
    background: none;
    border-radius: 5px;
  }
`;

const UpperFooter = ({ colorTheme }) => {
  const borderStyle = { border: `1px solid ${colorTheme.highLight.color}` };
  const submitBtnColors = {
    border: `1px solid ${colorTheme.highLight.color}`,
    color: `${colorTheme.pageLinkHover.color}`
  };

  return (
    <section className="content">
      <h2 style={colorTheme.title}>Contact</h2>
      <p style={colorTheme.pageLink}>
        Have an Idea, question or just want to say Hi? Get in touch, I'd love to
        hear from you!
      </p>

      <ContactForm
        name="footer-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <label>
          <input
            style={borderStyle}
            placeholder="Name"
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <input
            style={borderStyle}
            placeholder="Email"
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          <textarea
            style={borderStyle}
            placeholder="Message"
            name="message"
            required
          />
        </label>
        <button style={submitBtnColors} type="submit">
          Send
        </button>
      </ContactForm>
    </section>
  );
};

export default UpperFooter;
