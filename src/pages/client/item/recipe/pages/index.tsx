import { Title } from "@src/styled";
import RecipeList from "../components/RecipeList";
import RecipeFilter from "../components/RecipeFilter";

const RecipeMain = () => {
  return (
    <>
      <Title>레시피</Title>

      <RecipeFilter />
      <RecipeList />
    </>
  );
};

export default RecipeMain;
