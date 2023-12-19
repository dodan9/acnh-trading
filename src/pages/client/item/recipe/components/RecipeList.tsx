import { useTranslation } from "react-i18next";
import { useRecipeList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";
import { useRecipeKeyword } from "../store/recipeFilter";
import { ItemCardListBox } from "@src/components/itemCard/styled";
import { ItemCard } from "@src/components/itemCard/ItemCard";

const RecipeList = () => {
  const { data: recipe_list, isLoading } = useRecipeList();

  const { t } = useTranslation();
  const keyword = useRecipeKeyword();

  if (isLoading) return <LoadingSpinner />;
  if (!recipe_list) return <div>no data</div>;

  return (
    <ItemCardListBox>
      {recipe_list
        .filter(
          (recipe) =>
            keyword === "" ||
            t(`${LangEnum.recipe}.${recipe.name}`).includes(keyword)
        )
        .map((recipe) => {
          return (
            <ItemCard
              key={recipe.name}
              ko_name={t(`${LangEnum.recipe}.${recipe.name}`)}
              item={{
                name: recipe.name,
                image_url: recipe.image_url,
                type: LangEnum.recipe,
                amount: 1,
              }}
            />
          );
        })}
    </ItemCardListBox>
  );
};

export default RecipeList;
