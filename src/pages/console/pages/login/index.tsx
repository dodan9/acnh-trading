import { SignDataType, signIn } from "@src/common/services/supabase/auth";
import { ChangeEvent, useState } from "react";

const ConsoleSignIn = () => {
  const [sign, setSign] = useState<SignDataType>({ email: "", password: "" });

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSign({ ...sign, [name]: value });
  };

  const handleSignIn = () => {
    signIn(sign);
  };

  return (
    <>
      <div>
        <div>
          이메일:{" "}
          <input value={sign.email} name="email" onChange={handleTextChange} />
        </div>
        <div>
          pass:{" "}
          <input
            value={sign.password}
            name="password"
            onChange={handleTextChange}
            type="password"
          />
        </div>

        <div>
          <button onClick={handleSignIn}>로그인</button>
        </div>
      </div>
    </>
  );
};

export default ConsoleSignIn;
