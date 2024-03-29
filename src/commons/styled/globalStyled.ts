import { css } from "@emotion/react";
import { backgroundColor, passportColor, textColor } from "./color";
import { device } from ".";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jua", sans-serif;
    position: relative;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  body {
    background-color: rgb(235, 226, 188);
    color: rgb(65, 51, 45);
    font-size: 0.9rem;
    /* cursor: url("/src/assets/cursor/Leaf.png") 0 0, auto; */
    @media ${device.medium} {
      font-size: 1rem;
    }
    li {
      list-style: none;
    }
  }

  button {
    border-radius: 0.5rem;
    border-color: ${passportColor.shadow};
    background-color: ${backgroundColor.light};
    padding: 1px 5px;
    color: ${textColor.light};
    padding-top: 3px;
    &[aria-details="icon"] {
      border-radius: 2px;
      border: 2px solid ${passportColor.shadow};
    }
  }

  /* @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  img {
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      height: 30px;
      width: 100%;
      animation: 1s shine linear infinite;
    }
  } */
`;
