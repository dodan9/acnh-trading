import { supabase } from "@src/services/supabase";
import { ChangeEvent, useState } from "react";
import { Wrapper } from "@src/styled";
import { NewInquiryType } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { query_key } from "@src/services/query/query_key";

export const InquiryWrite = () => {
  const queryClient = useQueryClient();
  const [newInquiry, setNewInquiry] = useState<NewInquiryType>({
    title: "",
    content: "",
  });

  const handleInsertInquiry = async () => {
    try {
      await supabase.from("inquiry").insert({
        title: newInquiry.title,
        content: newInquiry.content,
        email: newInquiry.email,
      });

      queryClient.invalidateQueries({ queryKey: [query_key.INQUIRY_LIST] });
      setNewInquiry({
        title: "",
        content: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewInquiry({ ...newInquiry, [name]: value });
  };

  return (
    <Wrapper>
      <div>문의하기</div>

      <table>
        <thead>
          <tr>
            <th>제목*</th>
            <td>
              <input
                value={newInquiry.title}
                name="title"
                onChange={handleTextChange}
              />
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>이메일(선택)</th>
            <td>
              <input
                value={newInquiry.email ?? ""}
                name="email"
                onChange={handleTextChange}
                placeholder="이메일을 입력하시면 답변을 확인할 수 있습니다."
              />
            </td>
          </tr>
          <tr>
            <th>내용*</th>
            <td>
              <textarea
                value={newInquiry.content}
                name="content"
                onChange={handleTextChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleInsertInquiry}>제출하기</button>
    </Wrapper>
  );
};
