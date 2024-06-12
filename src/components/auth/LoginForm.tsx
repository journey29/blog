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
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import Socials from "./Socials";
import ErrorMessage from "../ErrorMessage";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginSchemaType } from "@/schemas";

import Link from "next/link";

import { type SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined | null>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    setError("");

    startTransition(async () => {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      }).then((res: SignInResponse | undefined) => {
        if (res?.ok) {
          router.push(
            `${new URLSearchParams(window.location.search).get("callbackUrl")}`, // /blog on deployment
          );
        } else if (res?.error) {
          setError(res?.error);
        }
      });
    });
  };

  return (
    <Card className="w-full max-w-[600px] shadow-md">
      <CardHeader>
        <Title title="Login" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
              <Link href="/register" className="font-medium">
                Register
              </Link>
            </div>
            <ErrorMessage message={error} />
            <Button type="submit" disabled={isPending} size={"lg"}>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Socials />
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
