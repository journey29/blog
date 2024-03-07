import Image from "next/image";
import { Title } from "../ui/title";

const Sponsors = () => {
  return (
    <div className="mb-24 space-y-10">
      <Title title="Loved by 100+ bloggers & businesses" />
      <div className="flex flex-wrap items-center justify-center gap-24">
        <Image
          className="cursor-pointer transition-all hover:scale-105"
          src={"/sponsors/sponsor.svg"}
          alt="sponsor"
          width={80}
          height={40}
        />
        <Image
          className="cursor-pointer transition-all hover:scale-105"
          src={"/sponsors/sponsor.svg"}
          alt="sponsor"
          width={80}
          height={40}
        />
        <Image
          className="cursor-pointer transition-all hover:scale-105"
          src={"/sponsors/sponsor.svg"}
          alt="sponsor"
          width={80}
          height={40}
        />
        <Image
          className="cursor-pointer transition-all hover:scale-105"
          src={"/sponsors/sponsor.svg"}
          alt="sponsor"
          width={80}
          height={40}
        />
      </div>
    </div>
  );
};

export default Sponsors;
