import { useTranslation } from "react-i18next";
import { usePhotoList } from "../services/query";

const PhotoMain = () => {
  const { data: photo_list } = usePhotoList();

  const { t } = useTranslation();

  return (
    <>
      <div>사진 목록</div>

      {photo_list &&
        photo_list.map((photo) => {
          return (
            <div key={photo.name}>{t(`${photo.category}.${photo.name}`)}</div>
          );
        })}
    </>
  );
};

export default PhotoMain;
