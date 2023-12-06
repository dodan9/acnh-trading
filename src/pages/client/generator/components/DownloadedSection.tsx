import { Section, SectionHeader } from "../styled";

import CartButtons from "./CartButtons";
import CartNotice from "./CartNotice";
import CartTableBox from "./CartTable";

const DownloadedSection = () => {
  // 정렬, 그룹화 기능 추가 요망
  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <CartButtons />

      <CartTableBox />

      <CartNotice />
    </Section>
  );
};

export default DownloadedSection;
