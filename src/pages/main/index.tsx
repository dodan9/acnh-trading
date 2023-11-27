import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FurnitureCategory,
  FurnitureDetailType,
  FurnitureFilterType,
} from "../item/furniture/types";
import { query_key } from "@src/services/query/query_key";
import { useQueryClient } from "@tanstack/react-query";
import { getFurnitureListApi } from "../item/furniture/services/api";

const Main = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getPreFurnitureData = (filter?: FurnitureFilterType) => {
    const getHouseWareList = async () => {
      const response = await getFurnitureListApi({
        ...filter,
      });
      return response.data;
    };

    queryClient.prefetchQuery<FurnitureDetailType[]>({
      queryKey: [query_key.FURNITURE_LIST, filter],
      queryFn: getHouseWareList,
    });
  };

  useEffect(() => {
    // getPreFurnitureData({ category: FurnitureCategory.Housewares });
    getPreFurnitureData({ category: FurnitureCategory.Miscellaneous });
    // getPreFurnitureData({ category: FurnitureCategory.WallMounted });
  }, [queryClient]);

  // 마우스 커서 favorite 주민 얼굴로

  return (
    <>
      <div>Main!!!</div>

      <div onClick={() => navigate("villager")}>주민들</div>

      <div onClick={() => navigate("collection")}>도감</div>

      <div onClick={() => navigate("clothing")}>옷</div>

      <div onClick={() => navigate("item")}>아이템</div>

      <div onClick={() => navigate("event")}>이벤트</div>

      <div onClick={() => navigate("generator")}>거래표 생성기</div>
    </>
  );
};

export default Main;
