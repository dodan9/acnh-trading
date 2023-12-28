import { useParams } from "react-router";
import { useMiscellaneousDetail } from "../services/query";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { LangEnum } from "@src/common/util/lang/enum";

const MiscellaneousDetail = () => {
  const { name } = useParams();
  const { data: miscellaneous, isLoading } = useMiscellaneousDetail({ name });

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!miscellaneous) return <div>no data</div>;
  return (
    <>
      <div>
        {t(
          `${miscellaneous.is_fence ? LangEnum.fence : LangEnum.others}.${
            miscellaneous.name
          }`
        )}
      </div>
    </>
  );
};
export default MiscellaneousDetail;
