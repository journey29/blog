import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

import { api } from "@/trpc/react";
import { useData } from "./DataContext";

const DeleteModal = ({ id }: { id: string }) => {
  const { filteredData, setFilteredData } = useData();
  const { mutateAsync } = api.blog.deleteStory.useMutation({});
  const utils = api.useUtils();

  const onDelete = async () => {
    const filteredStories = filteredData.filter((story) => story.id !== id);

    await mutateAsync({ id });

    await utils.blog.stories.invalidate();
    setFilteredData(filteredStories);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            story.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
