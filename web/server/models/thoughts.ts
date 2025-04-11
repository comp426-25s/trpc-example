/**
 * Defines the data models for thoughts.
 *
 * @author Ajay Gandecha <ajay@cs.unc.edu>
 */

import { z } from "zod";

export const ThoughtModel = z.object({
    id: z.string(),
    content: z.string(),
    created_at: z.string()
});

export type Thought = z.infer<typeof ThoughtModel>;

export const DraftThoughtModel = z.object({
    content: z.string()
});

export type DraftThought = z.infer<typeof DraftThoughtModel>;