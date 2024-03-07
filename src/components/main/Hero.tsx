import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="my-24 flex items-start justify-between">
      <div className="w-full max-w-[475px]">
        <h1 className="mb-5 text-4xl font-bold">
          All-in-one Blogging Platform
        </h1>
        <p className="mb-5 text-lg text-secondary-foreground">
          Storytrail is a platform to create a blog, manage it, and grow it
          without having to worry about managing servers, databases, and other
          technical stuff.
        </p>
        <div className="mb-8 flex items-center gap-5">
          <Button size={"lg"}>Start your blog</Button>
          <Button size={"lg"}>Pricing</Button>
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
        <Button className="mb-3" size={"lg"}>
          Create a temporary blog
        </Button>
        <p>Temporary blogs are deleted after 24 hours.</p>
      </div>
    </div>
  );
};

export default Hero;
