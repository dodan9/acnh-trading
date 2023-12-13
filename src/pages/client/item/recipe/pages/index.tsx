import { Title } from "@src/styled";
import RecipeList from "../components/RecipeList";
import RecipeFilter from "../components/RecipeFilter";

const RecipeMain = () => {
  // if (recipe_list)
  //   console.log(
  //     uniq(
  //       recipe_list.flatMap((recipe) => {
  //         return recipe.materials.map((material) => {
  //           return material.name;
  //         });
  //       })
  //     )
  //   );

  return (
    <>
      <Title>레시피</Title>

      <RecipeFilter />
      <RecipeList />
    </>
  );
};

export default RecipeMain;
