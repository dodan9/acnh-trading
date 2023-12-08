import styled from "@emotion/styled";
import { passportColor } from "@src/styled/color";

export const InquiryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
export const InquiryMessage = styled.div`
  width: fit-content;
  position: relative;
  border: 3px solid ${passportColor.shadow};
  border-radius: 25px;
  & > div {
    padding: 10px;
  }
  & > div:first-of-type {
    padding-bottom: 5px;
    font-weight: bolder;
    /* border-bottom: 3px dashed ${passportColor.shadow}; */
    border-radius: 20px 20px 0 0;
    background-color: ${passportColor.shadow};
  }
  margin-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border-right: 16px solid ${passportColor.shadow};
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;

    margin-top: -10px;
    margin-left: -19px;
  }
`;

export const InquiryWriteSection = styled(InquiryMessage)`
  width: 100%;

  & input,
  & textarea {
    border: 2px solid ${passportColor.shadow};
    border-radius: 0.5rem;
    width: 100%;
    padding: 5px;
    resize: none;
  }

  & > div {
    padding: 10px 20px;
  }
  & > div:first-of-type {
    padding: 20px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div:last-of-type {
    text-align: right;
    button {
      width: fit-content;
    }
  }
`;
