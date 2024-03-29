import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/commons/util/lang/enum";
import { useNavigate, useParams } from "react-router";
import { useBugDetail } from "../services/query";

const BugDetail = () => {
  const { name } = useParams();
  const { data: bug } = useBugDetail({ name });
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!bug) return;
  return (
    <>
      <div>
        <img src={bug.image_url} />
        <img src={bug.render_url} />
      </div>
      <div>{t(`${LangEnum.bug}.${bug.name}`)}</div>
      <div>{bug.rarity}</div>

      <div onClick={() => navigate(`/item/furniture/${bug.name} model`)}>
        모형 보러 가기
      </div>
    </>
  );
};

export default BugDetail;
