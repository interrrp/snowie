import { createCommand } from "@/lib/commands/command";
import { InteractionResponseType } from "discord-api-types/v10";

export default createCommand({
  name: "ping",
  description: "Pong!",
  handle: async () => ({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: { content: "🏓 Pong!" },
  }),
});
