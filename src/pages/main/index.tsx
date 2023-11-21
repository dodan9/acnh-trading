import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  // 마우스 커서 favorite 주민 얼굴로

  return (
    <>
      <div>Main!!!</div>

      <div onClick={() => navigate("villagers")}>주민들</div>

      <div onClick={() => navigate("collect")}>도감</div>

      <div onClick={() => navigate("clothing")}>옷</div>

      <div onClick={() => navigate("housewear")}>가구</div>

      <div onClick={() => navigate("item")}>아이템</div>
    </>
  );
};

export default Main;
