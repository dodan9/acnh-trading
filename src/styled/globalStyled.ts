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
    font-size: 0.92rem;
    /* cursor: url("/src/assets/cursor/Leaf.png") 0 0, auto; */
    @media ${device.medium} {
      font-size: 1rem;
    }
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  body {
    background-color: rgb(235, 226, 188);
    color: rgb(65, 51, 45);

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
`;
