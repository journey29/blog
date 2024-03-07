import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Story } from "@prisma/client";
import { useData } from "./DataContext";

const SearchSchema = z.object({
  search: z.string(),
});

type SearchSchemaType = z.infer<typeof SearchSchema>;

const Filter = () => {
  const { filteredData: data, setFilteredData } = useData();
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = ({ search }: SearchSchemaType) => {
    const filteredData = data?.filter((story: Story) =>
      story.title.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredData(filteredData);
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-[500px] items-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="search"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full max-w-[300px]">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Search stories"
                  className="w-full py-5 text-base"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full max-w-[100px]" type="submit">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default Filter;
