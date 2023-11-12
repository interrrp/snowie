import {
  APIApplicationCommand,
  APIApplicationCommandInteractionData,
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
  handle: (
    interaction: APIApplicationCommandInteractionData
  ) => Promise<APIInteractionResponse>;
}
export const createCommand = (command: Command) => command;
