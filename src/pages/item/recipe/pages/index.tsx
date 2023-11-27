import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecipeList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const RecipeMain = () => {
  const { data: recipe_list } = useRecipeList();

  const { t } = useTranslation();
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Recipes.json",
      method: "GET",
    });

    let text: string = "";
    response.data
      .map(
        (item: {
          name: string;
          //   type: string;
          translations?: { kRko?: string };
          //   kRko?: string;
          //   USen?: string;
        }) => {
          if (item.translations && item.translations.kRko)
            text += `"${item.name}" : "${item.translations.kRko}",`;
        }
      )
      .filter((item: any) => item !== undefined);
    console.log(text);
  };

  useEffect(() => {
    getKo();
  }, []);

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
