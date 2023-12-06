import { LangEnum } from "@src/lang/enum";
import { FossilDetailType } from "../types";
import { useTranslation } from "react-i18next";
import { FossilGroupPartBox, FossilPartCard } from "../styled";

const FossilParts = ({
  selectedGroup,
  fossils,
}: {
  selectedGroup: string;
  fossils: FossilDetailType[];
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t(`${LangEnum.fossil}.group.${selectedGroup}`)}</div>
      <FossilGroupPartBox>
        {fossils &&
          fossils.map((fossil) => (
            <FossilPartCard key={fossil.name}>
              <div>
                <img src={fossil.image_url} />
              </div>
              <div>{t(`${LangEnum.fossil}.parts.${fossil.name}`)}</div>
            </FossilPartCard>
          ))}
      </FossilGroupPartBox>
    </div>
  );
};

export default FossilParts;
