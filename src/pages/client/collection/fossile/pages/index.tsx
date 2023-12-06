import { useTranslation } from "react-i18next";
import { useFossilList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import groupBy from "lodash/groupBy";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FossilDetailType } from "../types";

const FossilMain = () => {
  const { data: fossil_list } = useFossilList();
  const [groupedFossilList, setGroupedFossilList] = useState<
    { [key: string]: FossilDetailType[] } | false
  >(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGroup, setSelectedGroup] = useState<string | false>(false);

  const { t } = useTranslation();

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

  const FossilGroup = ({
    group,
    onSelectGroup,
    count,
  }: {
    group: string;
    onSelectGroup: (group: string) => void;
    count: number;
  }) => (
    <div key={group} onClick={() => onSelectGroup(group)}>
      {t(`${LangEnum.fossil}.group.${group}`)}, {count}개
    </div>
  );

  const FossilParts = ({
    selectedGroup,
    fossils,
  }: {
    selectedGroup: string;
    fossils: FossilDetailType[];
  }) => (
    <div>
      <div>{t(`${LangEnum.fossil}.group.${selectedGroup}`)}</div>
      <div>
        {fossils.map((fossil) => (
          <div key={fossil.name}>
            {t(`${LangEnum.fossil}.parts.${fossil.name}`)}
          </div>
        ))}
      </div>
    </div>
  );

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
