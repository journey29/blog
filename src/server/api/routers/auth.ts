import { hash } from "bcryptjs";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { getVerificationTokenByToken } from "@/data/getVerificationToken";
import { getUserByEmail } from "@/data/getUser";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(RegisterSchema)
    .mutation(async ({ ctx, input }) => {
      const validatedData = RegisterSchema.safeParse(input);

      if (!validatedData.success) {
        return { error: "Invalid data" };
      }

      const { email, name, password } = validatedData.data;

      const exisitingUser = await ctx.db.user.findUnique({
        where: {
          email,
        },
      });

      if (exisitingUser) {
        return { error: "User already exist!" };
      }

      const hashedPassword = await hash(password, 10);

      await ctx.db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      const verificationToken = await generateVerificationToken(email);
      await sendVerificationEmail({
        to: email,
        token: verificationToken.token,
      });

      return { success: "User created!" };
    }),
  newVerification: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const verificationToken = await getVerificationTokenByToken(input.token);

      if (!verificationToken) {
        return { error: "There is no token!" };
      }

      const hasExpired = new Date(verificationToken.expires) < new Date();

      if (hasExpired) {
        return { error: "Token has expired!" };
      }

      const existingUser = await getUserByEmail(verificationToken.email);

      if (!existingUser) {
        return { error: "There is no user!" };
      }

      await ctx.db.user.update({
        where: {
          id: existingUser.id,
        },
        data: {
          emailVerified: new Date(),
          email: verificationToken.email,
        },
      });

      await ctx.db.verificationToken.delete({
        where: {
          id: verificationToken.id,
        },
      });

      return { success: "Email verified!" };
    }),
});
