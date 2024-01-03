import { Title } from "@src/commons/styled";
import { useNavigate } from "react-router";

const CollectionMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>도감</Title>

      <div onClick={() => navigate("artwork")}>미술품</div>
      <div onClick={() => navigate("bug")}>곤충</div>
      <div onClick={() => navigate("fish")}>물고기</div>
      <div onClick={() => navigate("fossil")}>화석</div>
      <div onClick={() => navigate("sea_creature")}>해산물</div>
    </>
  );
};

export default CollectionMain;
