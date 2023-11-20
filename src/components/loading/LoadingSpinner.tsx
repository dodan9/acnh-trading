import styled from "@emotion/styled";

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;

const Spinner = styled.div`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  border: 8px solid rgba(81, 170, 51, 0.3);
  border-top-color: rgb(109, 225, 225);
  border-radius: 100%;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
`;
