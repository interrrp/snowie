import Command from "@/app/lib/commands/command";
import ping from "@/app/lib/commands/ping";

export const COMMANDS: Command[] = [ping];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
