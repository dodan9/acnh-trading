import { nookRequest } from "@src/commons/services/api";
import { RecipeDetailType, RecipeFilterType } from "../../types";

export const getRecipeListApi = (filter?: RecipeFilterType) => {
  return nookRequest<RecipeDetailType[]>({
    url: `/nh/recipes`,
    method: "GET",
    params: filter,
  });
};

export const getRecipeDetailApi = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize?: number;
}) => {
  return nookRequest<RecipeDetailType>({
    url: `/nh/recipes/${name}`,
    method: "GET",
    params: { thumbsize },
  });
};
