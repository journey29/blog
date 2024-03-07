"use client";

import { Tiptap } from "@/components/blog/TipTap";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { BlogSchema, BlogSchemaType } from "@/schemas";
import { useForm } from "react-hook-form";

import { api } from "@/trpc/react";
import { useEffect } from "react";

type Props = {
  params: {
    id: string;
  };
};

const StoryPage = ({ params: { id } }: Props) => {
  const { data, isLoading } = api.blog.getStory.useQuery({ id });
  const mutation = api.blog.updateStory.useMutation();

  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: data?.title || "",
      description: data?.description || "",
    },
  });

  const onSubmit = (values: BlogSchemaType) => {
    mutation.mutate({
      id,
      description: values.description,
      title: values.title,
    });
  };

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title,
        description: data.description,
      });
    }
  }, [data]);

  return (
    <Form {...form}>
      <form
        className="flex h-full w-full flex-col justify-center space-y-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Tiptap description={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="h-12 w-full max-w-[200px] px-2 text-lg"
          type="submit"
          disabled={mutation.isLoading || isLoading}
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default StoryPage;
