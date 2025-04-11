/**
 * Implementation and server-side tRPC functions for working with thoughts data.
 *
 * @author Ajay Gandecha <ajay@cs.unc.edu>
 */

import { createTRPCRouter, publicProcedure } from "../trpc";
import { DraftThoughtModel, ThoughtModel } from "@/server/models/thoughts";

export const thoughtsRouter = createTRPCRouter({
    /**
     * Get all thoughts from the database.
     * 
     * @returns An array of thoughts.
     */
    get: publicProcedure
        .output(ThoughtModel.array())
        .query(async ({ ctx }) => {
            const { data, error } = await ctx.supabase
                .from("thoughts")
                .select("*")
                .order("created_at", { ascending: false });
            
            if (error) throw new Error(error.message);
            return ThoughtModel.array().parse(data);
        }),
    /**
     * Create a new thought.
     * 
     * @param title The title of the thought.
     * @returns The created thought.
     */
    create: publicProcedure
        .input(DraftThoughtModel)
        .mutation(async ({ ctx, input }) => {
            const { content } = input;

            const { data, error } = await ctx.supabase
                .from("thoughts")
                .insert({ content });

            if (error) throw new Error(error.message);
        })
});