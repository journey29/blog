import { getServerAuthSession } from "@/server/auth";

export const getSessionUser = async () => {
  const session = await getServerAuthSession();

  return session?.user;
};
