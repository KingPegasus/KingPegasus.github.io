import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
