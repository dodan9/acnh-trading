import { Modal } from "@src/common/components/modal/Modal";
import { useConsoleInquiryDetail } from "../services/query";
import LoadingSpinner from "@src/common/components/loading/LoadingSpinner";
import { format } from "date-fns";

const InquiryDetail = ({
  inquiry_id,
  onClose,
}: {
  inquiry_id: number;
  onClose: () => void;
}) => {
  const { data: inquiry, isFetching } = useConsoleInquiryDetail(inquiry_id);

  if (isFetching) return <LoadingSpinner />;
  if (!inquiry) return <div>no data...</div>;
  return (
    <Modal onClose={onClose}>
      <>
        <div>{inquiry.id}</div>
        <div>{inquiry.title}</div>
        <div>{format(new Date(inquiry.created_at), "yyyy-MM-dd HH:mm:ss")}</div>
        <div>{inquiry.email}</div>
        <div>{inquiry.content}</div>
        <div>
          {inquiry.answer.map((answer) => {
            return <div key={answer.id}>{answer.answer}</div>;
          })}
        </div>
      </>
    </Modal>
  );
};

export default InquiryDetail;
