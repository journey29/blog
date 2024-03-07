"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { api } from "@/trpc/react";
import { Title } from "../ui/title";
import { Button } from "../ui/button";
import Link from "next/link";

const NewVerification = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { mutate, data } = api.auth.newVerification.useMutation();

  if (!token) return;

  useEffect(() => {
    mutate({ token });
  }, []);

  return (
    <Card className="w-full max-w-[600px] space-y-2 shadow-md">
      <CardHeader>
        <Title title="Email verification" />
      </CardHeader>
      <CardContent>
        <SuccessMessage message={data?.success} />
        <ErrorMessage message={data?.error} />
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/login">Back to the login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewVerification;
