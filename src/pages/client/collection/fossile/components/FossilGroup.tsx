import { LangEnum } from "@src/lang/enum";
import { useTranslation } from "react-i18next";

const FossilGroup = ({
  group,
  onSelectGroup,
  count,
}: {
  group: string;
  onSelectGroup: (group: string) => void;
  count: number;
}) => {
  const { t } = useTranslation();
  return (
    <div key={group} onClick={() => onSelectGroup(group)}>
      {t(`${LangEnum.fossil}.group.${group}`)}, {count}개
    </div>
  );
};

export default FossilGroup;
