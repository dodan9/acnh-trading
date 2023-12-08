import { InquiryView } from "../components/InquiryView";
import { InquiryWrite } from "../components/InquiryWrite";
import { Wrapper } from "@src/styled";
import { InquiryContainer } from "../styled";

const InquiryMain = () => {
  return (
    <Wrapper>
      <InquiryContainer>
        <InquiryView />
        <InquiryWrite />
      </InquiryContainer>
    </Wrapper>
  );
};

export default InquiryMain;
