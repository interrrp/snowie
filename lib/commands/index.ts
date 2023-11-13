import Command from "@/lib/commands/command";
import ping from "@/lib/commands/ping";
import snowball from "@/lib/commands/snowball";
import when from "@/lib/commands/when";

export const COMMANDS: Command[] = [ping, when, snowball];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
