import {
  APIApplicationCommand,
  APIApplicationCommandOptionChoice,
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
    interaction: APIChatInputApplicationCommandInteraction
  ) => Promise<APIInteractionResponse>;
}
export const createCommand = (command: Command) => command;

export function getOption<T>(
  interaction: APIChatInputApplicationCommandInteraction,
  name: string
): T {
  return (
    interaction.data
      .options as unknown as APIApplicationCommandOptionChoice<T>[]
  ).find((option) => option.name === name)?.value as T;
}
