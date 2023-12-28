import { useNavigate, useParams } from "react-router";
import { useFishDetail } from "../services/query";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/commons/util/lang/enum";

const FishDetail = () => {
  const { name } = useParams();
  const { data: fish, isLoading } = useFishDetail({ name });

  const { t } = useTranslation();
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (!fish) return <div>no data</div>;
  return (
    <>
      <div>{t(`${LangEnum.fish}.${fish.name}`)}</div>

      <div onClick={() => navigate(`/item/furniture/${fish.name} model`)}>
        모형 보러 가기
      </div>
    </>
  );
};

export default FishDetail;
