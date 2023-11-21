import { Wrapper } from "@src/styled";
import { useTranslation } from "react-i18next";
import { useFossilList } from "../services/query";

const FossilList = () => {
  const { data: fossil_list } = useFossilList();

  const { t } = useTranslation();

  return (
    <Wrapper>
      <div>화석</div>

      {fossil_list &&
        fossil_list.map((fossil) => {
          return <div key={fossil.name}>{t(`fossil.${fossil.name}`)}</div>;
        })}
    </Wrapper>
  );
};

export default FossilList;
