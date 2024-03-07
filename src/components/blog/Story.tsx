import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import DeleteModal from "./DeleteModal";
import ToggleFavorite from "./ToggleFavorite";

import Link from "next/link";
import { formatDateTime } from "@/lib/utils";

import { Story as StoryType } from "@prisma/client";

type StoryProps = Omit<StoryType, "description" | "createdById">;

const Story = ({ title, createdAt, updatedAt, isFavorite, id }: StoryProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border px-6 py-4">
      <div>
        <Link
          href={`/story/${id}`}
          className="mb-3 block text-lg font-bold hover:underline"
        >
          {title}
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"secondary"}>More info</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-1">
              <h5 className="text-lg font-medium">Time info:</h5>
              <p>Created at {formatDateTime(createdAt.getTime())}</p>
              <p>Updated at {formatDateTime(updatedAt.getTime())}</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-4">
        {/* <ToggleFavorite isFavorite={isFavorite} id={id} /> */}
        <DeleteModal id={id} />
      </div>
    </div>
  );
};

export default Story;
