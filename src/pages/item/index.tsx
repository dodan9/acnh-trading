import { Wrapper } from "@src/styled";
import { useNavigate } from "react-router";

const Item = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>아이템</div>

      <div onClick={() => navigate("photo")}>액자 & 포스터</div>
    </Wrapper>
  );
};

export default Item;
