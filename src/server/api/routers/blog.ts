import { BlogSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

const schema = z.object({
  id: z.string(),
});

const schema2 = z.object({
  id: z.string(),
  isFavorite: z.boolean(),
});

export const blogRouter = createTRPCRouter({
  stories: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: { stories: true },
    });

    if (!user) return [];

    return user.stories;
  }),
  createStory: protectedProcedure
    .input(BlogSchema)
    .mutation(async ({ ctx, input }) => {
      const existingStory = await ctx.db.user.findFirst({
        where: {
          stories: { some: { title: input.title } },
        },
      });

      if (existingStory) {
        return { error: "Story with this title already exist!" };
      }

      await ctx.db.story.create({
        data: {
          title: input.title,
          description: input.description,
          isFavorite: false,
          createdById: ctx.session.user.id,
        },
      });

      return { success: "Story created!" };
    }),

  getStory: protectedProcedure.input(schema).query(async ({ ctx, input }) => {
    const story = await ctx.db.story.findUnique({
      where: {
        id: input.id,
      },
    });

    return story;
  }),
  updateStory: protectedProcedure
    .input(BlogSchema)
    .mutation(async ({ ctx, input }) => {
      const story = await ctx.db.story.update({
        data: {
          title: input.title,
          description: input.description,
          updatedAt: new Date(),
        },
        where: {
          id: input.id,
        },
      });

      return story;
    }),
  deleteStory: protectedProcedure
    .input(schema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.story.delete({
        where: {
          id: input.id,
        },
      });
    }),

  toggleFavorite: protectedProcedure
    .input(schema2)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.story.update({
        data: {
          isFavorite: !input.isFavorite,
        },
        where: {
          id: input.id,
        },
      });
    }),
});
