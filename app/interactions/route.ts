import { APIInteraction, InteractionType } from "discord-api-types/v10";

import { findCommand } from "@/app/lib/commands";
import {
  createInteractionResponse,
  createMessageResponse,
  PONG_RESPONSE,
  UNKNOWN_COMMAND_RESPONSE,
  UNKNOWN_INTERACTION_TYPE_RESPONSE,
} from "@/app/lib/response";
import isRequestFromDiscord from "@/app/lib/security";

export async function POST(request: Request) {
  const body = await request.text();
  const json = JSON.parse(body);

  if (!isRequestFromDiscord(request, body)) {
    return createMessageResponse(
      "Only Discord is permitted to interact with this endpoint",
      401
    );
  }

  const { type, data }: APIInteraction = json;
  switch (type) {
    case InteractionType.Ping:
      return PONG_RESPONSE;
    case InteractionType.ApplicationCommand:
      const command = findCommand(data.name);
      if (command) {
        return createInteractionResponse(await command.handle(data));
      } else {
        return UNKNOWN_COMMAND_RESPONSE;
      }
    default:
      return UNKNOWN_INTERACTION_TYPE_RESPONSE;
  }
}
