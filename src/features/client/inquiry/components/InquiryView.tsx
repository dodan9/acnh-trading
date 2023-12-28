import { useInquiryList } from "../services/query";
import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { InquiryMessage } from "../styled";
import { Title } from "@src/commons/styled";

export const InquiryView = () => {
  const { data: inquiry_list, isLoading } = useInquiryList();
  return (
    <>
      <Title>문의글</Title>
      {isLoading && <LoadingSpinner />}
      {inquiry_list &&
        inquiry_list.map((inquiry) => {
          return (
            <InquiryMessage key={`${inquiry.created_at} + ${inquiry.id}`}>
              <div>{inquiry.title}</div>
              <div>{inquiry.content}</div>
            </InquiryMessage>
          );
        })}
    </>
  );
};
