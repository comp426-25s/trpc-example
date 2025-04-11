/**
 * Configuration of the server-side tRPC API.
 *
 * Boilerplate created via create-t3-app.
 *
 * @author Ajay Gandecha <ajay@cs.unc.edu>
 */

import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc';
import { thoughtsRouter } from './routers/thoughts';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  thoughts: thoughtsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);