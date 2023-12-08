import { useNavigate } from "react-router";
import { MenuBox, MenuSection } from "./styled";

import nookcritters from "@src/assets/icons/nookcritters.png";
import messages from "@src/assets/icons/messages.png";
import nookcam from "@src/assets/icons/nookcam.png";
import nookstore from "@src/assets/icons/nookstore.png";
import nookwallet from "@src/assets/icons/nookwallet.png";
import nookmiles from "@src/assets/icons/nookmiles.png";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MenuSection>
      <MenuBox onClick={() => navigate("generator")}>
        <div>
          <img src={nookcam} />
        </div>
        <div>거래표 생성기</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("villager")}>
        <div>
          <img src={nookmiles} />
        </div>
        <div>주민들</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("collection")}>
        <div>
          <img src={nookcritters} />
        </div>
        <div>도감</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("clothing")}>
        <div>
          <img src={nookstore} />
        </div>
        <div>옷</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("item")}>
        <div>
          <img src={nookstore} />
        </div>
        <div>아이템</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("my-island")}>
        <div>
          <img src={nookwallet} />
        </div>
        <div>나의 섬</div>
      </MenuBox>

      <MenuBox onClick={() => navigate("inquiry")}>
        <div>
          <img src={messages} />
        </div>
        <div>문의하기</div>
      </MenuBox>

      {/* {import.meta.env.DEV && (
        <MenuBox onClick={() => navigate("event")}>이벤트</MenuBox>
      )} */}
    </MenuSection>
  );
};

export default Main;
