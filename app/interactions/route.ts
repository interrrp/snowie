import { APIInteraction, InteractionType } from "discord-api-types/v10";

import { findCommand } from "@/lib/commands";
import {
  createInteractionResponse,
  createMessageResponse,
  PONG_RESPONSE,
  UNKNOWN_COMMAND_RESPONSE,
  UNKNOWN_INTERACTION_TYPE_RESPONSE,
} from "@/lib/utils/response";
import isRequestFromDiscord from "@/lib/utils/security";

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
        return createInteractionResponse(await command.handle(json));
      } else {
        return UNKNOWN_COMMAND_RESPONSE;
      }
    default:
      return UNKNOWN_INTERACTION_TYPE_RESPONSE;
  }
}
