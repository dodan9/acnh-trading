import styled from "@emotion/styled";

export const ModalPaper = styled.div`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  margin: 32px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 64px);
  max-width: calc(100% - 64px);
  position: relative;
`;
