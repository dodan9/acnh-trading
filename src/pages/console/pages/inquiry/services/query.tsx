import { console_query_key } from "@src/pages/console/auth/console_query_key";
import {
  InquiryAnswerType,
  InquiryDetailType,
} from "@src/pages/client/inquiry/types";
import { supabase } from "@src/services/supabase";
import { useQuery } from "@tanstack/react-query";

interface ConsoleInquiryType extends InquiryDetailType {
  answer: InquiryAnswerType[];
}

export const useConsoleInquiryList = () => {
  const getInquiryList = async () => {
    const { data: inquiry_list } = await supabase
      .from("inquiry")
      .select(`*, answer(*)`)
      .returns<ConsoleInquiryType[]>();
    return inquiry_list;
  };

  return useQuery({
    queryKey: [console_query_key.INQUIRY_LIST],
    queryFn: getInquiryList,
  });
};

export const useConsoleInquiryDetail = (inquiry_id: number) => {
  const getInquiryDetail = async () => {
    if (!inquiry_id) return false;

    const { data: inquiry } = await supabase
      .from("inquiry")
      .select(`*, answer(*)`)
      .eq("id", inquiry_id)
      .returns<ConsoleInquiryType[]>();
    if (inquiry) return inquiry[0];
    else return false;
  };

  return useQuery({
    queryKey: [console_query_key.INQUIRY_DETAIL, inquiry_id],
    queryFn: getInquiryDetail,
  });
};
