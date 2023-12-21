import { supabase } from "@src/common/services/supabase";
import { ChangeEvent, useState } from "react";
import { NewInquiryType } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { query_key } from "@src/common/services/query/query_key";
import { InquiryWriteSection } from "../styled";

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
    <>
      <InquiryWriteSection>
        <div>
          <div>
            <span>
              <input
                value={newInquiry.title}
                name="title"
                onChange={handleTextChange}
                placeholder="*제목"
              />
            </span>
          </div>

          <div>
            <span>
              <input
                value={newInquiry.email ?? ""}
                name="email"
                onChange={handleTextChange}
                placeholder="이메일 (선택)"
              />
            </span>
          </div>
        </div>
        <div>
          <textarea
            value={newInquiry.content}
            name="content"
            onChange={handleTextChange}
            rows={4}
            placeholder="*내용"
          />
          <button onClick={handleInsertInquiry}>제출하기</button>
        </div>
      </InquiryWriteSection>
    </>
  );
};
