import LoginForm from "@/components/auth/LoginForm";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerAuthSession();

  if (session?.user) redirect("/blog");

  return (
    <div className="flex h-full items-center justify-center py-8">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
