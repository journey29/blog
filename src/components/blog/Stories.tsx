import { useData } from "./DataContext";
import Story from "./Story";

import { Story as StoryType } from "@prisma/client";

const Stories = () => {
  const { filteredData } = useData();

  return (
    <div className="my-16 space-y-5 text-left">
      <h2 className="text-left text-3xl font-bold">Stories</h2>
      {!!filteredData?.length ? (
        filteredData.map((story: StoryType) => (
          <Story
            id={story.id}
            title={story.title}
            createdAt={story.createdAt}
            updatedAt={story.updatedAt}
            isFavorite={story.isFavorite}
            key={story.id}
          />
        ))
      ) : (
        <h4>There is no stories!</h4>
      )}
    </div>
  );
};

export default Stories;
