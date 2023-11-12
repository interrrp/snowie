import Command from "@/lib/commands/command";
import ping from "@/lib/commands/ping";
import when from "@/lib/commands/when";

export const COMMANDS: Command[] = [ping, when];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
