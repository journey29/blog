import Hero from "@/components/main/Hero";
import Pricing from "@/components/main/Pricing";
import Sponsors from "@/components/main/Sponsors";

export default async function Home() {
  return (
    <>
      <Hero />
      {/* <Sponsors /> */}
      <Pricing />
    </>
  );
}
