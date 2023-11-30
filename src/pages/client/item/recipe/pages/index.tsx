import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useRecipeList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const RecipeMain = () => {
  const { data: recipe_list } = useRecipeList();

  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>레시피</div>

      <div>
        {recipe_list &&
          recipe_list.map((recipe) => {
            return (
              <div key={recipe.name}>
                {t(`${LangEnum.recipe}.${recipe.name}`)}
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default RecipeMain;
