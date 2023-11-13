import {
  APIApplicationCommandOptionChoice,
  APIChatInputApplicationCommandInteraction,
} from "discord-api-types/v10";

import Command from "@/lib/commands";

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
