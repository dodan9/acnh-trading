import { getSession } from "@src/common/services/supabase/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { console_query_key } from "./console_query_key";

const useSession = () => {
  return useQuery({
    queryKey: [console_query_key.SESSION],
    queryFn: getSession,
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
};

export const useConsoleGuard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: session, isStale, refetch, isSuccess } = useSession();

  useEffect(() => {
    if (isStale && location.pathname !== "/console/signin") {
      refetch();
    }
  }, [location]);

  useEffect(() => {
    if (isSuccess && (!session || !session.user)) {
      navigate("/console/signin");
    }
  }, [isSuccess]);

  if (session) return session;
  else return false;
};
