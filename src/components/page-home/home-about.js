import React from 'react';
import styled from 'styled-components';
import Super1 from '../super1';

const HomeAbout = props => {
  const colorTheme = props.colorTheme;

  const HomeAboutWrap = styled.section`
    /* max-width: 700px; */
    margin: auto;
    text-align: left;
    line-height: 1.75em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 70px 20px;
    @media (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media (min-width: 1600px) {
      padding-top: 100px;
      padding-bottom: 100px;
      padding-left: calc(20px + (50% - (1600px / 2)));
      padding-right: calc(20px + (50% - (1600px / 2)));
    }
    > div {
      @media (min-width: 768px) {
        width: 45%;
      }
    }
    h2 {
      margin-bottom: 1em;
      @media (min-width: 768px) {
        font-size: 2em;
      }
      @media (min-width: 1200px) {
        font-size: 2.75em;
      }
    }
    .sub-heading {
      text-align: left;
      font-family: cursive;
      font-size: 1.5em;
      margin-bottom: 1em;
    }
    a {
      color: ${colorTheme.highLight.color};
    }
    .img-wrap {
      margin-left: 30px;
      width: 100%;
      position: relative;
      overflow: visible !important;
      @media (min-width: 768px) {
        width: 45%;
      }
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        bottom: -30px;
        left: -30px;
        background-image: linear-gradient(
          180deg,
          ${colorTheme.background.backgroundColor},
          ${colorTheme.highLight.color}
        );
        position: absolute;
      }
    }
  `;

  return (
    <HomeAboutWrap>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <div className="img-wrap">
        <Super1 />
      </div>

      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HomeAboutWrap>
  );
};

export default HomeAbout;
