import { Wrapper } from "@src/styled";
import { useNavigate } from "react-router";

const ItemMain = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>아이템</div>
      <div onClick={() => navigate("photo")}>액자 & 포스터</div>
      <div onClick={() => navigate("funiture")}>가구</div>
      <div onClick={() => navigate("interior")}>벽지 / 바닥 / 러그</div>
      <div onClick={() => navigate("miscellaneous")}>아이템(비배치?)</div>
      <div onClick={() => navigate("recipe")}>레시피</div>
      <div onClick={() => navigate("tools")}>도구</div>
    </Wrapper>
  );
};

export default ItemMain;
