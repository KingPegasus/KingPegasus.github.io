import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    url: z.url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
