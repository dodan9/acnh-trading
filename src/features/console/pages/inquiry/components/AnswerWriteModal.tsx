import { Modal } from "@src/commons/components/modal/Modal";
import { console_query_key } from "@src/features/console/auth/console_query_key";
import { supabase } from "@src/commons/services/supabase";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

const AnswerWriteModal = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
  const [answer, setAnswer] = useState<string>("");
  const queryClient = useQueryClient();

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const handleAnswer = async () => {
    if (answer !== "") {
      try {
        await supabase.from("answer").insert({
          answer,
          inquiry_id: id,
        });
        queryClient.invalidateQueries({
          queryKey: [console_query_key.INQUIRY_LIST],
        });
        onClose();
      } catch (e) {
        alert(e);
      }
    }
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <textarea value={answer} onChange={handleContentChange} />
      </div>

      <button onClick={handleAnswer}>답변하기</button>
    </Modal>
  );
};

export default AnswerWriteModal;
