import { Wrapper } from "@src/styled";
import { useNavigate, useParams } from "react-router";
import { useClothingDetail } from "../services/query";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/lang/enum";

const ClothingDetail = () => {
  const { name } = useParams();
  const { data: clothing } = useClothingDetail({ name });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateWithParam = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    navigate(`/clothing?${key}=${value}`);
  };

  return (
    <Wrapper>
      {clothing && (
        <div>
          <div>
            {t(`${LangEnum.clothing}.${clothing.category}.${clothing.name}`)}
          </div>
          <div
            onClick={() =>
              handleNavigateWithParam({
                key: "category",
                value: clothing.category,
              })
            }
          >
            {t(`${LangEnum.clothing}.category.${clothing.category}`)}
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default ClothingDetail;
