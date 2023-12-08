import { useFossilList } from "../services/query";
import groupBy from "lodash/groupBy";
import { ChangeEvent, useEffect, useState } from "react";
import { FossilDetailType } from "../types";
import FossilParts from "../components/FossilParts";
import { Title } from "@src/styled";
import { LangEnum } from "@src/lang/enum";
import { useTranslation } from "react-i18next";

const FossilMain = () => {
  const { data: fossil_list } = useFossilList();
  const [groupedFossilList, setGroupedFossilList] = useState<
    { [key: string]: FossilDetailType[] } | false
  >(false);

  const { t } = useTranslation();

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const partsOrder = [
    "right",
    "skull",
    "neck",
    "chest",
    "body",
    "torso",
    "pelvis",
    "tail",
    "tail tip",
    "left",
  ];

  const getPartIndex = (part: string) => {
    const foundIndex = partsOrder.findIndex((order) => part.includes(order));
    return foundIndex !== -1 ? foundIndex : partsOrder.length;
  };

  const handleSearchKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  useEffect(() => {
    if (fossil_list) {
      let filteredFossilList = fossil_list;

      if (searchKeyword !== "") {
        filteredFossilList = filteredFossilList.filter((fossil) =>
          t(`${LangEnum.fossil}.parts.${fossil.name}`).includes(searchKeyword)
        );
      }

      const newGroupedFossilList = groupBy(
        filteredFossilList.filter((fossil) => fossil.fossil_group !== ""),
        "fossil_group"
      );
      const singleFossils = filteredFossilList.filter(
        (fossil) => fossil.fossil_group === ""
      );

      singleFossils.forEach((fossil) => {
        newGroupedFossilList[fossil.name] = [fossil];
      });

      Object.entries(newGroupedFossilList).forEach(([group, fossils]) => {
        newGroupedFossilList[group] = fossils.sort(
          (a, b) => getPartIndex(a.name) - getPartIndex(b.name)
        );
      });

      setGroupedFossilList(newGroupedFossilList);
    }
  }, [fossil_list, searchKeyword]);

  return (
    <>
      <Title>화석</Title>

      <div>
        검색: <input value={searchKeyword} onChange={handleSearchKeyword} />
      </div>

      {groupedFossilList &&
        Object.entries(groupedFossilList).map(([group, fossils]) => (
          <FossilParts key={group} group={group} fossils={fossils} />
        ))}
    </>
  );
};

export default FossilMain;
