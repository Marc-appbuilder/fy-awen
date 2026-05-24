import { defineCollection, z } from 'astro:content';

const shared = {
  title: z.string(),
  date: z.coerce.date(),
  featured: z.boolean().optional().default(false),
};

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    ...shared,
    description: z.string(),
    image: z.string().optional(),
  }),
});

const poetry = defineCollection({
  type: 'content',
  schema: z.object({
    ...shared,
    description: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    ...shared,
    description: z.string().optional(),
    image: z.string(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    ...shared,
  }),
});

export const collections = { essays, poetry, photos, notes };
