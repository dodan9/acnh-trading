import { Wrapper } from "@src/styled";
// import axios from "axios";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEventList } from "../services/query";
import { LangEnum } from "@src/lang/enum";
import axios from "axios";
import { useEffect } from "react";

const EventMain = () => {
  const { data: event_list } = useEventList();

  const { t } = useTranslation();

  // https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Seasons%20and%20Events.json
  // https://raw.githubusercontent.com/alexislours/translation-sheet-data/master/catchphrases.json
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/alexislours/translation-sheet-data/master/catchphrases.json",
      method: "GET",
    });

    let text: string = "";
    response.data
      .map(
        (item: {
          // name: string;
          // type: string;
          locale: { USen: string; KRko: string };
          //   kRko?: string;
          //   USen?: string;
        }) => {
          text += `"${item.locale.USen}" : "${item.locale.KRko}",`;
        }
      )
      .filter((item: any) => item !== undefined);
    console.log(text);
  };

  useEffect(() => {
    getKo();
  }, []);

  // 절대 이렇게는 안 된다... 개선 필요
  const getEventText = (name: string) => {
    let result: string = "";
    if (name.includes("birthday")) {
      result = `${t(
        `${LangEnum.villager}.${name.replace("'s birthday", "")}`
      )} 생일`;
    }
    if (name.includes("ends") || name.includes("begins")) {
      const eventName = name.replace("ends", "").replace("begins", "").trim();
      result = `${t(`${LangEnum.event}.${eventName}`)} ${
        name.includes("ends") ? "종료" : "시작"
      }`;
    }

    if (name.includes("recipes are available")) {
      const eventName = name
        .replace("recipes are available", "")
        .replace("Last day", "")
        .replace("First day", "")
        .replace("of", "")
        .trim();
      result = `${t(`${LangEnum.event}.${eventName}`)}`;
      if (name.includes("Last day")) {
        result += "종료";
      }
    }

    if (name.includes("Southern") || name.includes("Northern")) {
      const eventName = name
        .replace("Hemisphere", "")
        .replace("Southern", "")
        .replace("Northern", "")
        .replace("(", "")
        .replace(")", "")
        .trim();
      result = `${t(`${LangEnum.event}.${eventName}`)} ${
        name.includes("Southern") ? "(남반구)" : "(북반구)"
      }`;
    }

    return result.trim();
  };

  return (
    <Wrapper>
      <div>이벤트</div>

      {event_list &&
        event_list.map((event) => {
          const name = event.event
            .replace("Nook Shopping event", "")
            .replace("event", "");
          return <div key={name + event.date}>{getEventText(name)}</div>;
        })}
    </Wrapper>
  );
};

export default EventMain;
