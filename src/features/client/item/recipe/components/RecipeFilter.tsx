import { ChangeEvent } from "react";
import { useRecipeFilterAction, useRecipeKeyword } from "../store/recipeFilter";
import SearchFilter from "@src/commons/components/filter/searchFilter/SearchFilter";
import material_ko from "@src/commons/util/lang/ko/material_ko.json";
import SearchSelectFilter from "@src/commons/components/filter/selectFilter/SearchSelectFilter";

const RecipeFilter = () => {
  const keyword = useRecipeKeyword();
  const { setKeyword } = useRecipeFilterAction();
  const { setMaterial } = useRecipeFilterAction();

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <SearchFilter value={keyword} onChange={handleChangeKeyword} />
      <div>
        <SearchSelectFilter
          name="재료"
          setValue={setMaterial}
          options={Object.entries(material_ko.material).map(([key, value]) => {
            return {
              key,
              value,
            };
          })}
        />
      </div>
    </>
  );
};

export default RecipeFilter;
