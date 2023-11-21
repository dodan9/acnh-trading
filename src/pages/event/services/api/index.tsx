import { nookRequest } from "@src/services/api";
import { EventDetailType, EventFilterType } from "../../types";

export const getEventListApi = (filter?: EventFilterType) => {
  return nookRequest<EventDetailType[]>({
    url: "/nh/events",
    method: "GET",
    params: filter,
  });
};
