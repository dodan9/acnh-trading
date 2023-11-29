import { Wrapper } from "@src/styled";
import { useInquiryList } from "../services/query";
import LoadingSpinner from "@src/components/loading/LoadingSpinner";

export const InquiryView = () => {
  const { data: inquiry_list, isLoading } = useInquiryList();
  return (
    <Wrapper>
      <div>문의글</div>
      {isLoading && <LoadingSpinner />}
      {inquiry_list &&
        inquiry_list.map((inquiry) => {
          return (
            <div key={inquiry.created_at + inquiry.id}>
              <div>{inquiry.title}</div>
              <div>{inquiry.content}</div>
            </div>
          );
        })}
    </Wrapper>
  );
};
