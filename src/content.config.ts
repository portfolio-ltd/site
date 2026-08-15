import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    platforms: z.array(z.enum(['ios', 'android', 'mac', 'web'])),
    order: z.number().default(99),
    icon: z.string(),
    accent: z.string().default('#3b82f6'),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          kind: z.enum(['phone', 'desktop']).default('phone'),
        })
      )
      .default([]),
    storeLinks: z
      .object({
        appStore: z.string().url().optional(),
        playStore: z.string().url().optional(),
        macAppStore: z.string().url().optional(),
      })
      .default({}),
    techStack: z.array(z.string()).default([]),
    supportEmail: z.string().default('hello@sagarchandagarwal.com'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    changelog: z
      .array(
        z.object({
          version: z.string(),
          date: z.string(),
          notes: z.array(z.string()),
        })
      )
      .default([]),
  }),
});

const privacy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/privacy' }),
  schema: z.object({
    app: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = { apps, privacy };
