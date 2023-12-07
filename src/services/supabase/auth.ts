import { useNavigate } from "react-router-dom";
import { supabase } from ".";

export interface SignDataType {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: SignDataType) => {
  const { data } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(data);
};

export const signIn = async ({ email, password }: SignDataType) => {
  const navigate = useNavigate();
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (data.user) navigate("/console/home");
  else alert("fail");
};

export const refresh = async () => {
  const { data } = await supabase.auth.refreshSession();
  const { session, user } = data;

  return { session, user };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  const navigate = useNavigate();

  if (error) console.log(error);
  navigate("/console/signin");
};

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();

  return data;
};

export const getSession = async () => {
  const { data } = await supabase.auth.getSession();

  return data.session;
};
