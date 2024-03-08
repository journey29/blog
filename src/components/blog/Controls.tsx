import Sort from "./Sort";
import Filter from "./Filter";
import { Button } from "../ui/button";

import Link from "next/link";

const Controls = () => {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
      <div className="flex-1">
        <Filter />
      </div>
      <Sort />
      <Button asChild>
        <Link href="/create-story">Create story</Link>
      </Button>
    </div>
  );
};

export default Controls;
