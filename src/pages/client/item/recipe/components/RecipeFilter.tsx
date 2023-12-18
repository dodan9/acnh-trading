import { ChangeEvent } from "react";
import { useRecipeFilterAction, useRecipeKeyword } from "../store/recipeFilter";
import SearchFilter from "@src/components/filter/searchFilter/SearchFilter";

const RecipeFilter = () => {
  const keyword = useRecipeKeyword();
  const { setKeyword } = useRecipeFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />
    </>
  );
};

export default RecipeFilter;
