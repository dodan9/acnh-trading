import { useParams } from "react-router";
import { useToolDetailQuery } from "../services/query";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { LangEnum } from "@src/commons/util/lang/enum";
import { useTranslation } from "react-i18next";

const ToolDetail = () => {
  const { name } = useParams();
  const { data: tool, isLoading } = useToolDetailQuery({ name });

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!tool) return <div>no data</div>;
  return (
    <>
      <div>{t(`${LangEnum.tools}.${tool.name}`)}</div>
    </>
  );
};

export default ToolDetail;
