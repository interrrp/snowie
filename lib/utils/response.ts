import {
  APIInteractionResponse,
  InteractionResponseType,
} from "discord-api-types/v10";

export function createObjectResponse<T>(obj: T, statusCode: number = 200) {
  return new Response(JSON.stringify(obj), {
    status: statusCode,
    headers: { "Content-Type": "application/json" },
  });
}

export function createMessageResponse(
  message: string,
  statusCode: number = 200
) {
  return createObjectResponse({ message }, statusCode);
}

export const createInteractionResponse =
  createObjectResponse<APIInteractionResponse>;

export const PONG_RESPONSE = createInteractionResponse({
  type: InteractionResponseType.Pong,
});
export const UNKNOWN_COMMAND_RESPONSE = createInteractionResponse({
  type: InteractionResponseType.ChannelMessageWithSource,
  data: { content: "Unknown command" },
});
export const UNKNOWN_INTERACTION_TYPE_RESPONSE = createMessageResponse(
  "Unknown interaction type",
  400
);
