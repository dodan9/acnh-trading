import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";

const InteriorItemMain = () => {
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Wall-mounted.json",
      method: "GET",
    });

    // const y = ["Furniture", "Photos", "Posters"];
    // // const no = [
    // //   "Etc", // 나중에 이것만 추출
    // //   "Harv's Island Items", // 나중에 이것만 추출
    // //   "Plants",
    // //   "Tools",
    // //   "Dishes",
    // //   "Event Items",
    // // ];

    let text: string = "";
    response.data
      .map(
        (item: {
          name: string;
          type: string;
          translations?: { kRko?: string };
        }) => {
          if (
            item.translations &&
            item.translations.kRko
            // (!y.includes(item.translations.sourceSheet) ||item.translations.sourceSheet.includes("Model"))
          )
            text += `"${item.name}" : "${item.translations.kRko}",`;
        }
      )
      .filter((item: any) => item !== undefined);
    console.log(text);
  };

  useEffect(() => {
    getKo();
  }, []);

  return (
    <Wrapper>
      <div>잡화?</div>
    </Wrapper>
  );
};

export default InteriorItemMain;
