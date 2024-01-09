import { useParams } from "react-router";
import { useInteriorItemDetail } from "../services/query";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";

const InteriorItemDetail = () => {
  const { name } = useParams();
  const { data: interiorItem, isLoading } = useInteriorItemDetail({ name });

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!interiorItem) return <div>no data</div>;
  return (
    <>
      <div>{t(`${interiorItem.category}.${interiorItem.name}`)}</div>
    </>
  );
};

export default InteriorItemDetail;
