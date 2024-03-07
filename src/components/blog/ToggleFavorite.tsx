import { useState } from "react";
import { useData } from "./DataContext";
import { api } from "@/trpc/react";

import { Toggle } from "../ui/toggle";
import { Star } from "lucide-react";

const ToggleFavorite = ({
  isFavorite,
  id,
}: {
  isFavorite: boolean;
  id: string;
}) => {
  const [isFavoriteValue, setIsFavorite] = useState(isFavorite);
  const { mutate } = api.blog.toggleFavorite.useMutation();
  const { setFilteredData, filteredData } = useData();

  const onToggle = () => {
    const newFilteredData = filteredData.map((story) => {
      if (story.id === id) {
        return { ...story, isFavorite: !isFavoriteValue };
      }
      return story;
    });

    setFilteredData(newFilteredData);
    mutate({ id, isFavorite: !isFavoriteValue });
    setIsFavorite(!isFavoriteValue);
  };

  return (
    <Toggle pressed={isFavoriteValue} onPressedChange={onToggle}>
      <Star />
    </Toggle>
  );
};

export default ToggleFavorite;
