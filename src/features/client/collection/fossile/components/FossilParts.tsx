import { LangEnum } from "@src/commons/util/lang/enum";
import { FossilDetailType } from "../types";
import { useTranslation } from "react-i18next";
import { FossilPartCard, FossilGroupBox } from "../styled";
import TradingButton from "@src/commons/components/tradingButton/TradingButton";
import { useState } from "react";
import FossilModal from "./FossilModal";
import { FlexBox } from "@src/commons/styled";

const FossilParts = ({
  group,
  fossils,
}: {
  group: string;
  fossils: FossilDetailType[];
}) => {
  const { t } = useTranslation();
  const [selectedFossil, setSelectedFossil] = useState<
    FossilDetailType | false
  >(false);

  return (
    <>
      <FossilGroupBox>
        <h3>
          {t(`${LangEnum.fossil}.group.${group}`)}, {fossils.length}개
        </h3>
        <FlexBox gap="10px">
          {fossils &&
            fossils.map((fossil) => (
              <FossilPartCard
                key={fossil.name}
                onClick={() => setSelectedFossil(fossil)}
              >
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
        </FlexBox>
      </FossilGroupBox>

      {selectedFossil && (
        <FossilModal
          onClose={() => setSelectedFossil(false)}
          fossil={selectedFossil}
        />
      )}
    </>
  );
};

export default FossilParts;
