import { useEffect, useState } from "react";
import { useData } from "./DataContext";

import { Toggle } from "../ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Star } from "lucide-react";

import { Story } from "@prisma/client";

const Sort = () => {
  const { filteredData, setFilteredData } = useData();
  const [showFavorites, setShowFavorites] = useState(false);
  let data: Story[] = filteredData;

  useEffect(() => {
    data = filteredData;
  }, [filteredData]);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);

    if (!showFavorites) {
      const favoriteStories = filteredData.filter(
        (story: Story) => story.isFavorite,
      );
      setFilteredData(favoriteStories);
    } else {
      setFilteredData(data);
    }
  };

  const sortStories = (sortValue: string) => {
    let sortedStories: Story[] = [];

    if (sortValue === "Recent") {
      sortedStories = [...filteredData].sort(
        (a: Story, b: Story) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    } else if (sortValue === "Oldest") {
      sortedStories = [...filteredData].sort(
        (a: Story, b: Story) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    setFilteredData(sortedStories);
  };

  return (
    <div className="flex items-center gap-2">
      <Select onValueChange={(value) => sortStories(value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort stories" />
          <SelectContent>
            <SelectItem value="Recent">Recent stories</SelectItem>
            <SelectItem value="Oldest">Oldest stories</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </Select>
      {/* <Toggle onPressedChange={toggleFavorites} pressed={showFavorites}>
        <Star />
      </Toggle> */}
    </div>
  );
};

export default Sort;
