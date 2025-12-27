import { defineCollection, z } from 'astro:content';

// Base schema for all wiki articles
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  games: z.array(z.enum([
    'fallout1',
    'fallout2',
    'fallout3',
    'fallout-new-vegas',
    'fallout4',
    'fallout76',
    'fallout-tactics',
    'fallout-shelter',
    'fallout-brotherhood'
  ])).default([]),
  draft: z.boolean().default(false),
  updatedDate: z.coerce.date().optional(),
  createdDate: z.coerce.date().optional(),
});

// Games collection
const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    releaseDate: z.coerce.date(),
    developer: z.string(),
    publisher: z.string(),
    platforms: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

// Characters collection
const characters = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    race: z.enum(['human', 'ghoul', 'super-mutant', 'synth', 'robot', 'deathclaw', 'other']).default('human'),
    affiliation: z.array(z.string()).default([]),
    status: z.enum(['alive', 'deceased', 'unknown', 'determinant']).default('unknown'),
    voice_actor: z.string().optional(),
  }),
});

// Factions collection
const factions = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['major', 'minor', 'raider', 'tribal', 'corporate', 'government', 'other']).default('other'),
    headquarters: z.string().optional(),
    leaders: z.array(z.string()).default([]),
    enemies: z.array(z.string()).default([]),
    allies: z.array(z.string()).default([]),
  }),
});

// Locations collection
const locations = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['city', 'vault', 'settlement', 'ruin', 'landmark', 'dungeon', 'region', 'other']).default('other'),
    region: z.string().optional(),
    map_marker: z.boolean().default(true),
    quests: z.array(z.string()).default([]),
  }),
});

// Weapons collection
const weapons = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['pistol', 'rifle', 'shotgun', 'smg', 'heavy', 'energy', 'explosive', 'melee', 'unarmed', 'thrown', 'other']).default('other'),
    damage: z.string().optional(),
    ammo_type: z.string().optional(),
    weight: z.number().optional(),
    value: z.number().optional(),
    unique: z.boolean().default(false),
  }),
});

// Armor collection
const armor = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['power-armor', 'combat-armor', 'leather', 'metal', 'clothing', 'helmet', 'accessory', 'other']).default('other'),
    damage_resistance: z.string().optional(),
    weight: z.number().optional(),
    value: z.number().optional(),
    unique: z.boolean().default(false),
  }),
});

// Items collection
const items = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['aid', 'food', 'drink', 'chem', 'junk', 'misc', 'key', 'holotape', 'note', 'magazine', 'bobblehead', 'other']).default('other'),
    effects: z.array(z.string()).default([]),
    weight: z.number().optional(),
    value: z.number().optional(),
  }),
});

// Creatures collection
const creatures = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['mutant', 'animal', 'insect', 'robot', 'abomination', 'cryptid', 'other']).default('other'),
    hostile: z.boolean().default(true),
    variants: z.array(z.string()).default([]),
  }),
});

// Quests collection
const quests = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['main', 'side', 'companion', 'faction', 'misc', 'repeatable', 'dlc']).default('side'),
    quest_giver: z.string().optional(),
    location: z.string().optional(),
    rewards: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
  }),
});

// Lore collection
const lore = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.enum(['pre-war', 'great-war', 'post-war', 'timeline', 'technology', 'culture', 'organizations', 'other']).default('other'),
  }),
});

// Perks collection
const perks = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['perk', 'trait', 'skill']).default('perk'),
    requirements: z.string().optional(),
    ranks: z.number().optional(),
    effects: z.array(z.string()).default([]),
  }),
});

export const collections = {
  games,
  characters,
  factions,
  locations,
  weapons,
  armor,
  items,
  creatures,
  quests,
  lore,
  perks,
};
