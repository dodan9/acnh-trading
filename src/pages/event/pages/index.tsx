import { Wrapper } from "@src/styled";
import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEventList } from "../services/query";
import { LangEnum } from "@src/lang/enum";

const EventList = () => {
  const { data: event_list } = useEventList();

  const { t } = useTranslation();
  const getKo = async () => {
    const response = await axios({
      url: "https://raw.githubusercontent.com/Norviah/animal-crossing/master/json/data/Seasons%20and%20Events.json",
      method: "GET",
    });

    console.log(
      response.data
        .map(
          (item: {
            name: string;
            type: string;
            translations?: { kRko?: string };
          }) => {
            if (item.translations && item.translations.kRko)
              return `"${item.name} ${item.type} ends" : "${item.translations.kRko} 종료"`;
          }
        )
        .filter((item: any) => item !== undefined)
    );
  };

  useEffect(() => {
    getKo();
  }, []);

  return (
    <Wrapper>
      <div>이벤트</div>

      {event_list &&
        event_list.map((event) => {
          return (
            <div key={event.event + event.date}>
              {event.event.includes("birthday")
                ? `${t(
                    `${LangEnum.villager}.${event.event.split("'")[0]}`
                  )} 생일`
                : t(`${LangEnum.event}.${event.event}`)}
            </div>
          );
        })}
    </Wrapper>
  );
};

export default EventList;
