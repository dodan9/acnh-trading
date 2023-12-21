import { useParams } from "react-router";
import { useSeaCreatureDetail } from "../services/query";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/common/util/lang/enum";

const SeaCreatureDetail = () => {
  const { name } = useParams();
  const { data: sea_creature, isLoading } = useSeaCreatureDetail({ name });
  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!sea_creature) return <div>no data</div>;
  return (
    <>
      <div>{t(`${LangEnum.sea_creature}.${sea_creature.name}`)}</div>
    </>
  );
};

export default SeaCreatureDetail;
