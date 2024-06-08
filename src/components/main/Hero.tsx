import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="my-16 flex flex-col items-center justify-between sm:my-24 lg:flex-row lg:items-start">
      <div className="mb-8 flex  w-full max-w-[475px] flex-col items-center space-y-3 text-center lg:items-start lg:space-y-5 lg:text-left">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          All-in-one Blogging Platform
        </h1>
        <p className="text-base text-secondary-foreground md:text-lg">
          Storytrail is a platform to create a blog, manage it, and grow it
          without having to worry about managing servers, databases, and other
          technical stuff.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <Button size={"lg"} className="w-full" asChild>
            <Link href="/blog">Start your blog</Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-[550px] rounded-xl bg-secondary p-8">
        <div className="mb-4 space-y-4">
          <h4 className="text-2xl font-bold sm:text-3xl">In a hurry?</h4>
          <p>
            Try Storytrail with a free temporary blog created in a few seconds.
            <strong> No sign up required.</strong>
          </p>
        </div>
        <Button
          className="mb-3 p-4 text-base md:p-7 md:text-lg"
          size={"lg"}
          disabled
        >
          Create a temporary blog
        </Button>
        <p>Temporary blogs are deleted after 24 hours.</p>
      </div>
    </div>
  );
};

export default Hero;
