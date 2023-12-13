import { useQuery } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";
import { getRecipeDetailApi, getRecipeListApi } from "../api";
import { useRecipeFilter } from "../../store/recipeFilter";

export const useRecipeList = () => {
  const filter = useRecipeFilter();

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
  name?: string;
  thumbsize?: number;
}) => {
  const getRecipeDetail = async () => {
    if (!name) return false;
    const response = await getRecipeDetailApi({ name, thumbsize });
    return response.data;
  };

  return useQuery({
    queryKey: [query_key.RECIPE_DETAIL, name],
    queryFn: getRecipeDetail,
  });
};
