import {
  APIInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";

import {
  createInteractionResponse,
  createMessageResponse,
} from "@/app/lib/response";
import isRequestFromDiscord from "@/app/lib/security";

export async function POST(request: Request): Promise<Response> {
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
      return createInteractionResponse({ type: InteractionResponseType.Pong });
    default:
      return createMessageResponse(
        "Do not know how to respond to interaction",
        500
      );
  }
}
