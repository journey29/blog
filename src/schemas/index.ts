import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const BlogSchema = z.object({
  title: z.string().min(1, {
    message: "There is no title!",
  }),
  description: z.string().min(1, {
    message: "There is no description!",
  }),
  id: z.string().optional(),
});

export type BlogSchemaType = z.infer<typeof BlogSchema>;
