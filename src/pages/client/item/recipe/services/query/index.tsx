import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { RecipeFilterType } from "../../types";
import { getRecipeDetailApi, getRecipeListApi } from "../api";

export const useRecipeList = (filter?: RecipeFilterType) => {
  const getRecipeList = async () => {
    const response = await getRecipeListApi(filter);
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.RECIPE_LIST, filter],
    queryFn: getRecipeList,
  });
};

export const useRecipeDetail = ({
  name,
  thumbsize,
}: {
  name: string;
  thumbsize: number;
}) => {
  const getRecipeDetail = async () => {
    const response = await getRecipeDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.RECIPE_DETAIL, name],
    queryFn: getRecipeDetail,
  });
};
