import { createCommand } from "@/app/lib/commands/command";
import { InteractionResponseType } from "discord-api-types/v10";

export default createCommand({
  name: "ping",
  description: "Pong!",
  async handle(interaction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { content: "🏓 Pong!" },
    };
  },
});
