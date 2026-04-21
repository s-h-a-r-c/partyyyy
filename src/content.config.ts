import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/index.{md,mdx}',
    base: './src/content/posts',
    generateId: ({ entry }) =>
      entry.replace(/\/index\.(md|mdx)$/, '').replace(/^index\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    created: z.coerce.date(),
    updated: z.coerce.date().optional(),
    parent: z.string().optional(),
  }),
});

export const collections = { posts };
