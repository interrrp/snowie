import { InteractionResponseType } from "discord-api-types/v10";

import { createCommand } from "@/lib/utils/command";

export default createCommand({
  name: "ping",
  description: "Pong!",

  handle: async () => ({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: { content: "🏓 Pong!" },
  }),
});
