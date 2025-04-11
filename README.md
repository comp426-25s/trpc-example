## Next.js App Example with Supabase + tRPC

This small app shows a minimal setup with Next.js, Supabase, and tRPC.

### Getting Started

Once you clone the repo, you will need to connect this repo to a Supabase project. The project should contain one single table, RLS disabled, with the following fields:

```
id (uuid)
content (text)
created_at (timestampz, default=now())
```

Then, follow the instructions in step 2 [here](https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=pages) to create the `.env.local` file.

To start the project, run:

```
cd web
npm install
npm run dev
```

