import { query_key } from "@src/commons/services/query/query_key";
import { supabase } from "@src/commons/services/supabase";
import { useQuery } from "@tanstack/react-query";
import { InquiryDetailType } from "../types";

export const useInquiryList = () => {
  const getInquiryList = async () => {
    const { data: inquiry_list } = await supabase
      .from("inquiry")
      .select("id, created_at, title, content")
      .returns<InquiryDetailType[]>();
    return inquiry_list;
  };

  return useQuery({
    queryKey: [query_key.INQUIRY_LIST],
    queryFn: getInquiryList,
  });
};
