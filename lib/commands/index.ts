import {
  APIApplicationCommand,
  APIChatInputApplicationCommandInteraction,
  APIInteractionResponseCallbackData,
} from "discord-api-types/v10";

import ping from "@/lib/commands/ping";
import snowball from "@/lib/commands/snowball";
import when from "@/lib/commands/when";

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
  ) => Promise<APIInteractionResponseCallbackData>;
}

export const COMMANDS: Command[] = [ping, when, snowball];
export function findCommand(name: string) {
  return COMMANDS.find((command) => command.name === name);
}
