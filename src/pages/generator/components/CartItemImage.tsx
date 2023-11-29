import { imgRequest } from "@src/services/api";
import { useEffect } from "react";

export const ItemImage = ({
  name,
  image_url,
}: {
  name: string;
  image_url: string;
}) => {
  const handleLoad = async (image_url: string, name: string) => {
    const imgElement = document.getElementById(name) as HTMLImageElement;

    try {
      const response = await imgRequest({
        url: image_url,
        headers: {
          "Content-Type": "image/png",
        },
        responseType: "blob",
      });
      const blob = response.data;

      const imageUrl = URL.createObjectURL(blob);

      if (imgElement) imgElement.src = imageUrl;
    } catch (error) {
      console.error("Error fetching or processing image:", error);
    }
  };

  useEffect(() => {
    handleLoad(image_url, name);
  }, [image_url]);

  return <img src={image_url} id={name} />;
};
