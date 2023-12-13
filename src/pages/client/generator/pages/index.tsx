import { Wrapper } from "@src/styled";
import DownloadedSection from "../components/DownloadedSection";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { Modal } from "@src/components/modal/Modal";

const GeneratorMain = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [imageData, setImageData] = useState<Blob | false>(false);

  const handleGenerate = async () => {
    if (!targetRef.current) return;

    // html-to-image 라이브러리 조사
    try {
      const div = targetRef.current;
      const canvas = await html2canvas(div, {
        logging: true,
        backgroundColor: null,
        scale: 2,
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          setImageData(blob);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (imageData) {
      saveAs(imageData, "result.png");
    }
  };

  return (
    <Wrapper>
      <div>거래 이미지 생성기</div>

      <div ref={targetRef}>
        <DownloadedSection />
      </div>

      <button onClick={handleGenerate}>미리보기</button>

      {imageData && (
        <Modal onClose={() => setImageData(false)}>
          <>
            <img src={imageData ? URL.createObjectURL(imageData) : ""} />
            <div>
              <button onClick={handleDownload}>다운로드</button>
            </div>
          </>
        </Modal>
      )}
    </Wrapper>
  );
};

export default GeneratorMain;
