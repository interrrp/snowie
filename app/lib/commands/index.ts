import Command from "@/app/lib/commands/command";
import ping from "@/app/lib/commands/ping";
import when from "@/app/lib/commands/when";

export const COMMANDS: Command[] = [ping, when];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
