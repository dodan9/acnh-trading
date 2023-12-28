import { ChangeEvent, memo, useState } from "react";
import { CartNoticeBox } from "../styled";

const CartNotice = () => {
  const [noticeValue, setNoticeValue] = useState<string>("");
  const [notice, setNotice] = useState<string[]>([]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNoticeValue(value);
  };

  const handleAddNotice = () => {
    setNotice([...notice, noticeValue]);
    setNoticeValue("");
  };

  const handleRemoveNotice = (index: number) => {
    const updatedNotice = [...notice];
    updatedNotice.splice(index, 1);
    setNotice(updatedNotice);
  };
  return (
    <CartNoticeBox>
      <div data-html2canvas-ignore="true">덧붙임말</div>

      <div>
        {notice.length > 0 &&
          notice.map((noti, index) => {
            return (
              <div key={index}>
                <span>* {noti}</span>
                <button
                  data-html2canvas-ignore="true"
                  onClick={() => handleRemoveNotice(index)}
                >
                  x
                </button>
              </div>
            );
          })}
      </div>

      <div data-html2canvas-ignore="true">
        <input value={noticeValue} onChange={handleTextChange} />
        <button onClick={handleAddNotice}>추가</button>
      </div>
    </CartNoticeBox>
  );
};

export default memo(CartNotice);
