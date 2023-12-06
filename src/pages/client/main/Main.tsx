import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>메뉴</div>

      <div onClick={() => navigate("villager")}>주민들</div>

      <div onClick={() => navigate("collection")}>도감</div>

      <div onClick={() => navigate("clothing")}>옷</div>

      <div onClick={() => navigate("item")}>아이템</div>

      <div onClick={() => navigate("generator")}>거래표 생성기</div>

      <div onClick={() => navigate("inquiry")}>문의하기</div>

      {import.meta.env.DEV && (
        <div onClick={() => navigate("event")}>이벤트</div>
      )}
    </>
  );
};

export default Main;
