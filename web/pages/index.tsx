import { Geist, Geist_Mono } from "next/font/google";
import { api } from "@/utils/trpc/api";
import { Separator } from "@/components/ui/separator";
import ThoughtCard from "@/components/thoughts/thought-card";
import CreateThoughtDialog from "@/components/thoughts/create-thought-dialog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Main page of the application.
 */
export default function Home() {

  // Load the thoughts data using tRPC + React Query's useQuery hook
  const { data: thoughts, refetch: refetchThoughts } = api.thoughts.get.useQuery();
  // Create a new thought using tRPC + React Query's useMutation hook
  const { mutate: createThought } = api.thoughts.create.useMutation({
    onSuccess: () => {
      refetchThoughts();
    }
  });

  // Functionality for creating a new thought, then refreshing the thoughts list.
  const onCreateThoughtButtonPressed = (content: string) => {
    createThought({ content: content })
  }

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] flex flex-col gap-4 p-4 max-w-2xl mx-auto`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg text-center">Thoughts Collection</h1>
        <p className="text-sm text-muted-foreground text-center">Demo of Next.js and Supabase + tRPC</p>
      </div>
      <Separator />
      <CreateThoughtDialog onCreateThoughtButtonPressed={(content) => onCreateThoughtButtonPressed(content)} />
      {(thoughts ?? []).map((thought) => (
        <ThoughtCard key={thought.id} thought={thought} />
      ))}
    </div>
  );
}
