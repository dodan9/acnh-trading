import { Wrapper } from "@src/styled";
import { useNavigate } from "react-router";

const ItemMain = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>아이템</div>

      <div onClick={() => navigate("photo")}>액자 & 포스터</div>
      <div onClick={() => navigate("funiture")}>가구</div>
    </Wrapper>
  );
};

export default ItemMain;
