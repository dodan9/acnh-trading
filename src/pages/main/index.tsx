import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  // 마우스 커서 favorite 주민 얼굴로

  return (
    <>
      <div>Main!!!</div>

      <div onClick={() => navigate("villager")}>주민들</div>

      <div onClick={() => navigate("collection")}>도감</div>

      <div onClick={() => navigate("clothing")}>옷</div>

      <div onClick={() => navigate("housewear")}>가구</div>

      <div onClick={() => navigate("item")}>아이템</div>

      <div onClick={() => navigate("event")}>이벤트</div>
    </>
  );
};

export default Main;
