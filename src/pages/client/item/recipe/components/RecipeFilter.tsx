import { ChangeEvent } from "react";
import { useRecipeFilterAction, useRecipeKeyword } from "../store/recipeFilter";

const RecipeFilter = () => {
  const keyword = useRecipeKeyword();
  const { setKeyword } = useRecipeFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <div>filter</div>

      <div>
        이름으로 검색: <input value={keyword} onChange={handleChangeKeyword} />
      </div>
    </>
  );
};

export default RecipeFilter;
