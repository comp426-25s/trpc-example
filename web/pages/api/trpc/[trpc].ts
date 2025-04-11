/**
 * TRPC handler boilerplate generated from  create-t3-app.
 */

import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';

/**
 * Handles the creation of the Next.js API handler for tRPC.
 *
 * This handler is configured with the application's router and context creation function.
 *
 * In development mode, it logs errors to the console with the path and error message.
 */
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
          );
        }
      : undefined
});