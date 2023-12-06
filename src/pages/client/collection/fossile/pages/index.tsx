import { useFossilList } from "../services/query";
import groupBy from "lodash/groupBy";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FossilDetailType } from "../types";
import FossilParts from "../components/FossilParts";
import FossilGroup from "../components/FossilGroup";

const FossilMain = () => {
  const { data: fossil_list } = useFossilList();
  const [groupedFossilList, setGroupedFossilList] = useState<
    { [key: string]: FossilDetailType[] } | false
  >(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGroup, setSelectedGroup] = useState<string | false>(false);

  const partsOrder = [
    "skull",
    "neck",
    "chest",
    "torso",
    "pelvis",
    "tail",
    "tail tip",
  ];

  const handleSelectGroup = (group: string) => {
    if (searchParams.get("group") === group) {
      searchParams.delete("group");
      setSearchParams(searchParams);
      setSelectedGroup(false);
    } else {
      searchParams.set("group", group);
      setSearchParams(searchParams);
    }
  };

  const getPartIndex = (part: string) => {
    const foundIndex = partsOrder.findIndex((order) => part.includes(order));
    return foundIndex !== -1 ? foundIndex : partsOrder.length;
  };

  useEffect(() => {
    if (fossil_list) {
      const newGroupedFossilList = groupBy(
        fossil_list.filter((fossil) => fossil.fossil_group !== ""),
        "fossil_group"
      );
      const singleFossils = fossil_list.filter(
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
  }, [fossil_list]);

  useEffect(() => {
    if (searchParams.get("group")) {
      setSelectedGroup(searchParams.get("group")!);
    } else {
      setSelectedGroup(false);
    }
  }, [searchParams]);

  return (
    <>
      <div>화석</div>

      {groupedFossilList &&
        (selectedGroup ? (
          <FossilParts
            selectedGroup={selectedGroup}
            fossils={groupedFossilList[selectedGroup]}
          />
        ) : (
          Object.entries(groupedFossilList).map(([group, fossils]) => (
            <FossilGroup
              key={group}
              group={group}
              onSelectGroup={handleSelectGroup}
              count={fossils.length}
            />
          ))
        ))}
    </>
  );
};

export default FossilMain;
