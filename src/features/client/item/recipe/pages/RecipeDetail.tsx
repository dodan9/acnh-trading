import { useParams } from "react-router";
import { useRecipeDetail } from "../services/query";
import { useTranslation } from "react-i18next";
import { LangEnum } from "@src/common/util/lang/enum";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";

const RecipeDetail = () => {
  const { name } = useParams();
  const { data: recipe, isLoading } = useRecipeDetail({ name });

  const { t } = useTranslation();

  if (isLoading) return <LoadingSpinner />;
  if (!recipe) return <div>no data</div>;
  return (
    <>
      <div>{t(`${LangEnum.recipe}.${recipe.name}`)} 레시피</div>

      <div>
        {recipe.materials.map((material) => {
          return (
            <div key={material.name}>
              {t(`${LangEnum.material}.${material.name}`)} x {material.count} 개
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeDetail;
