import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger, DialogTitle } from "../ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });


export default function CreateThoughtDialog({ onCreateThoughtButtonPressed }: { onCreateThoughtButtonPressed: (content: string) => void }) {

    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [createDialogContent, setCreateDialogContent] = useState("");

    return (
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
                <Button>
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Thought
        </Button>
        </DialogTrigger>
        <DialogContent className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] flex flex-col max-w-2xl `}>
        <DialogHeader>
            <DialogTitle>Add Thought</DialogTitle>
            <Input className="my-3" type="text" placeholder="Thought" value={createDialogContent} onChange={(e) => setCreateDialogContent(e.target.value)} />
        </DialogHeader>
        <DialogFooter>
            <Button variant="secondary" onClick={() => setCreateDialogOpen(false)}>Cancel</Button>
            <Button variant="default" onClick={() => {
                onCreateThoughtButtonPressed(createDialogContent);
                setCreateDialogContent("");
                setCreateDialogOpen(false);
            }}>Add</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    );
}