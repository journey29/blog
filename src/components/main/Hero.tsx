import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="my-16 flex flex-col items-center justify-between sm:my-24 lg:flex-row lg:items-start">
      <div className="flex w-full max-w-[475px] flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="mb-5 text-4xl font-bold">
          All-in-one Blogging Platform
        </h1>
        <p className="mb-5 text-lg text-secondary-foreground">
          Storytrail is a platform to create a blog, manage it, and grow it
          without having to worry about managing servers, databases, and other
          technical stuff.
        </p>
        <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <Button size={"lg"} className="w-full" asChild>
            <Link href="/blog">Start your blog</Link>
          </Button>
          <Button size={"lg"} className="w-full" asChild>
            <Link href="#pricing">Pricing</Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-[550px] rounded-xl bg-secondary p-8">
        <div className="mb-4 space-y-4">
          <h4 className="text-3xl font-bold">In a hurry?</h4>
          <p>
            Try Storytrail with a free temporary blog created in a few seconds.
            <strong> No sign up required.</strong>
          </p>
        </div>
        <Button className="mb-3 p-4 text-base sm:p-7 sm:text-lg" size={"lg"}>
          Create a temporary blog
        </Button>
        <p>Temporary blogs are deleted after 24 hours.</p>
      </div>
    </div>
  );
};

export default Hero;
