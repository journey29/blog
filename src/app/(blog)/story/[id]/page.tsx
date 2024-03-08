import StoryUpdate from "@/components/blog/StoryUpdate";

type Props = {
  params: {
    id: string;
  };
};

const StoryUpdatePage = ({ params: { id } }: Props) => {
  return (
    <div className="flex h-full items-center py-8">
      <StoryUpdate id={id} />
    </div>
  );
};

export default StoryUpdatePage;
