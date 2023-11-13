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
    <main className="md:w-3/4 mx-auto md:p-16 p-12">
      <h1 className="text-2xl font-bold mb-4">Commands</h1>
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
  );
}
