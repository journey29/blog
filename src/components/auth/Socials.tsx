import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Bot, Github } from "lucide-react";

const Socials = () => {
  const onClick = (provider: string) => {
    signIn(provider, {
      callbackUrl: "/blog",
    });
  };

  return (
    <div className="flex w-full items-center gap-6">
      <Button className="h-12 flex-1" onClick={() => onClick("discord")}>
        <Bot size={27} />
      </Button>
      <Button className="h-12 flex-1" onClick={() => onClick("github")}>
        <Github size={27} />
      </Button>
    </div>
  );
};

export default Socials;
