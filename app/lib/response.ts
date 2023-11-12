import { APIInteractionResponse } from "discord-api-types/v10";

export function createObjectResponse<T>(obj: T, statusCode: number = 200) {
  return new Response(JSON.stringify(obj), { status: statusCode });
}

export function createMessageResponse(
  message: string,
  statusCode: number = 200
) {
  return createObjectResponse({ message }, statusCode);
}

export const createInteractionResponse =
  createObjectResponse<APIInteractionResponse>;
