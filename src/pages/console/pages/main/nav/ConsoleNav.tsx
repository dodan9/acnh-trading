import { useNavigate } from "react-router";
import { signOut } from "@src/services/supabase/auth";
import { useConsoleGuard } from "@src/pages/console/auth/guard";
import { ConsoleNavBox } from "./style";

const ConsoleNav = () => {
  const auth = useConsoleGuard();
  const navigate = useNavigate();
  return (
    <ConsoleNavBox>
      <div>{auth && <button onClick={() => signOut()}>로그아웃</button>}</div>
      <div onClick={() => navigate("/console/home")}>home</div>
      <div onClick={() => navigate("/console/inquiry")}>문의</div>
    </ConsoleNavBox>
  );
};

export default ConsoleNav;
