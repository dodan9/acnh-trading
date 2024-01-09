import LoadingSpinner from "@src/commons/components/loading/LoadingSpinner";
import { useConsoleInquiryList } from "../services/query";
import { useState } from "react";
import AnswerWriteModal from "./AnswerWriteModal";
import { format } from "date-fns";
import InquiryDetail from "./InquiryDetail";

const ConsoleInquiryList = () => {
  const { data: inquiry_list, isFetching } = useConsoleInquiryList();
  const [answerModalOpen, setAnswerModalOpen] = useState<number | false>(false);
  const [detailModalOpen, setDetailModalOpen] = useState<number | false>(false);

  return (
    <>
      <div>문의 목록</div>

      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
            <th>이메일</th>
            <th>답변</th>
          </tr>
        </thead>

        <tbody>
          {isFetching && (
            <tr>
              <td colSpan={5}>
                <LoadingSpinner />
              </td>
            </tr>
          )}

          {inquiry_list &&
            inquiry_list.map((inquiry) => {
              return (
                <tr key={inquiry.id}>
                  <td onClick={() => setDetailModalOpen(inquiry.id)}>
                    {inquiry.title}
                  </td>
                  <td>{inquiry.content}</td>
                  <td>{format(new Date(inquiry.created_at), "yyyy-MM-dd")}</td>
                  <td>{inquiry.email}</td>
                  <td>
                    {inquiry.answer.length > 0 ? (
                      `답변 ${inquiry.answer.length}개`
                    ) : (
                      <button onClick={() => setAnswerModalOpen(inquiry.id)}>
                        답변하기
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {answerModalOpen && (
        <AnswerWriteModal
          id={answerModalOpen}
          onClose={() => setAnswerModalOpen(false)}
        />
      )}

      {detailModalOpen && (
        <InquiryDetail
          inquiry_id={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
        />
      )}
    </>
  );
};

export default ConsoleInquiryList;
