import { ChangeEvent, useState } from "react";

const SignIn = () => {
  const [signData, setSignData] = useState<{ email: String; password: string }>(
    { email: "", password: "" }
  );
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const handleChangeSignData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignData({ ...signData, [name]: value });
  };

  const handleChangePasswordConfirm = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(event.target.value);
  };

  return <></>;
};

export default SignIn;
