"use client";

import { Tiptap } from "@/components/blog/TipTap";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { BlogSchema, BlogSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/trpc/react";

const CreateStory = () => {
  const { mutate, data, isLoading } = api.blog.createStory.useMutation({
    onSuccess: () => form.reset(),
  });

  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof BlogSchema>) => {
    mutate({
      description: values.description,
      title: values.title,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col justify-center space-y-5"
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold">Story title</FormLabel>
              <FormControl>
                <Input
                  className="h-11 text-lg"
                  {...field}
                  placeholder="Title"
                />
              </FormControl>
              <FormMessage className="text-sm" />
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
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <SuccessMessage message={data?.success} />
        <ErrorMessage message={data?.error} />
        <Button
          className="h-12 w-full max-w-[200px] px-2 text-lg"
          type="submit"
          disabled={isLoading}
        >
          Save story
        </Button>
      </form>
    </Form>
  );
};

export default CreateStory;
