import { ChangeEvent, useState } from "react";
import { Section, SectionHeader } from "../styled";

import CartButtons from "./CartButtons";
import CartNotice from "./CartNotice";
import CartTableBox from "./CartTable";

const DownloadedSection = () => {
  const [tradingType, setTradingType] = useState<"sell" | "buy" | "free">(
    "buy"
  );

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTradingType(event.target.value as "sell" | "buy" | "free");
  };
  return (
    <>
      <div data-html2canvas-ignore="true">
        <label>
          <input
            type="radio"
            name="tradingType"
            value="buy"
            checked={tradingType === "buy"}
            onChange={handleRadioChange}
          />
          구매
        </label>
        <label>
          <input
            type="radio"
            name="tradingType"
            value="sell"
            checked={tradingType === "sell"}
            onChange={handleRadioChange}
          />
          판매
        </label>
        {/* <label>
          <input
            type="radio"
            name="tradingType"
            value="free"
            checked={tradingType === "free"}
            onChange={handleRadioChange}
          />
          나눔
        </label> */}
      </div>
      <Section>
        <SectionHeader>
          {tradingType === "buy" && "구매"}
          {tradingType === "sell" && "판매"}
          {/* {tradingType === "free" && "나눔"} */}
        </SectionHeader>

        <CartButtons />

        <CartTableBox />

        <CartNotice />
      </Section>
    </>
  );
};

export default DownloadedSection;
