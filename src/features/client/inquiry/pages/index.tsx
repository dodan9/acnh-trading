import { InquiryView } from "../components/InquiryView";
import { InquiryWrite } from "../components/InquiryWrite";
import { Wrapper } from "@src/commons/styled";
import { InquiryContainer } from "../styled";

const InquiryMain = () => {
  return (
    <Wrapper>
      <InquiryContainer>
        <InquiryView />
        <InquiryWrite />
      </InquiryContainer>

      <div>* 작성된 내용은 모두에게 공개됩니다.</div>
    </Wrapper>
  );
};

export default InquiryMain;
