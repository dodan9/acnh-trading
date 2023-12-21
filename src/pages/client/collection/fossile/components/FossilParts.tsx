import { LangEnum } from "@src/assets/lang/enum";
import { FossilDetailType } from "../types";
import { useTranslation } from "react-i18next";
import { FossilPartsBox, FossilPartCard, FossilGroupBox } from "../styled";
import TradingButton from "@src/common/components/tradingButton/TradingButton";
import { useState } from "react";
import FossilModal from "./FossilModal";

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
        <FossilPartsBox>
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
        </FossilPartsBox>
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
