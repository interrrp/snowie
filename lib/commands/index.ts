import ping from "@/lib/commands/ping";
import snowball from "@/lib/commands/snowball";
import when from "@/lib/commands/when";

import {
  APIApplicationCommand,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponse,
} from "discord-api-types/v10";

export default interface Command
  extends Omit<
    APIApplicationCommand,
    | "id"
    | "type"
    | "application_id"
    | "default_member_permissions"
    | "version"
    | "description"
  > {
  description?: string;
  example?: string;
  handle: (
    interaction: APIChatInputApplicationCommandInteraction,
  ) => Promise<APIInteractionResponse>;
}

export const COMMANDS: Command[] = [ping, when, snowball];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
