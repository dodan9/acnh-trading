import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  // 마우스 커서 favorite 주민 얼굴로

  return (
    <>
      <div>Main!!!</div>

      <div onClick={() => navigate("villagers")}>주민들</div>
    </>
  );
};

export default Main;
