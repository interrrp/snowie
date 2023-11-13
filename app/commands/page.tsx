import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COMMANDS } from "@/lib/commands";

export default function Commands() {
  return (
    <div className="md:w-3/4 mx-auto md:p-16 p-12">
      <header>
        <nav>
          <h1 className="text-2xl font-bold mb-4">
            <Link href="/" aria-label="Go back">
              <ArrowLeft className="inline mr-2 -translate-y-0.5" />
            </Link>{" "}
            Commands
          </h1>
        </nav>
      </header>

      <main>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Command</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Example</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {COMMANDS.map((command) => (
              <TableRow key={command.name}>
                <TableCell>{command.name}</TableCell>
                <TableCell>{command.description}</TableCell>
                <TableCell>
                  <code>{`/${command.name} ${command.example || ""}`}</code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
