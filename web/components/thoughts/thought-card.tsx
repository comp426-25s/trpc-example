import { Thought } from "@/server/models/thoughts";
import { CardContent, CardFooter } from "../ui/card";
import { Card } from "../ui/card";
import { format } from "date-fns";

export default function ThoughtCard({ thought }: { thought: Thought }) {
  return (
    <Card key={thought.id}>
        <CardContent>
            <p>{thought.content}</p>
        </CardContent>
        <CardFooter>
            <p className="text-sm text-muted-foreground">{format(thought.created_at, "MM/dd/yyyy 'at' h:mm a")}</p>
        </CardFooter>
    </Card>
  );
}