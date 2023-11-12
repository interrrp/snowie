import { Github } from "lucide-react";
import Link from "next/link";

import { metadata } from "@/app/layout";
import Snowfall from "@/components/snowfall";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold">{metadata.title?.toString()}</h1>
      <p className="text-muted-foreground text-xl">
        {metadata.description?.toString()}
      </p>
      <div className="flex gap-2">
        <Link
          href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_APPLICATION_ID}&permissions=0&scope=bot applications.commands`}
          className={buttonVariants()}
        >
          Invite me
        </Link>
        <Link
          href="/commands"
          className={buttonVariants({ variant: "outline" })}
        >
          Commands
        </Link>
        <Link
          href="https://github.com/interrrp/snowie"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </div>

      <Snowfall />
    </main>
  );
}
