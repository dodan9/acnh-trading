import { LangEnum } from "@src/lang/enum";
import { FossilDetailType } from "../types";
import { useTranslation } from "react-i18next";
import { FossilGroupPartBox, FossilPartCard } from "../styled";
import TradingButton from "@src/components/tradingButton/TradingButton";

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
              <div>
                <TradingButton
                  name={fossil.name}
                  type={`${LangEnum.fossil}.parts`}
                  image_url={fossil.image_url}
                  amount={1}
                />
              </div>
            </FossilPartCard>
          ))}
      </FossilGroupPartBox>
    </div>
  );
};

export default FossilParts;
