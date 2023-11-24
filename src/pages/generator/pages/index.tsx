import { Wrapper } from "@src/styled";
import DownloadedSection from "../components/DownloadedSection";
import { useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const GeneratorMain = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!targetRef.current) return;

    try {
      const div = targetRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <Wrapper>
      <div>거래 이미지 생성</div>

      <div ref={targetRef}>
        <DownloadedSection />
      </div>

      <button onClick={handleDownload}>다운로드</button>
    </Wrapper>
  );
};

export default GeneratorMain;