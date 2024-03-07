"use client";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "../ui/form";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Title } from "../ui/title";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";

import Link from "next/link";
import { api } from "@/trpc/react";

import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";

const LoginForm = () => {
  const { data, mutate, isLoading } = api.auth.register.useMutation({
    onSuccess: () => {
      form.reset();
    },
  });

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegisterSchemaType) => {
    mutate({
      email: values.email,
      name: values.name,
      password: values.password,
    });
  };

  return (
    <Card className="w-full max-w-[600px] shadow-md">
      <CardHeader>
        <Title title="Register" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="123456" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Link href="/login" className="font-medium">
                Already have an account
              </Link>
            </div>
            <ErrorMessage message={data?.error} />
            <SuccessMessage message={data?.success} />
            <Button type="submit" disabled={isLoading} size={"lg"}>
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
