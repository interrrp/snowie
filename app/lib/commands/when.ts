import { InteractionResponseType } from "discord-api-types/v10";

import { randomColor } from "@/app/lib/colors";
import { createCommand } from "@/app/lib/commands/command";

export default createCommand({
  name: "when",
  description: "When is Christmas?",
  async handle() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25);
    const daysUntilChristmas = Math.floor(
      (christmas.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        embeds: [
          {
            title: "⏳ When can you open your presents?",
            color: randomColor(),
            fields: [
              {
                name: "Current date",
                value: now.toDateString(),
                inline: true,
              },
              {
                name: "Christmas",
                value: christmas.toDateString(),
                inline: true,
              },
              {
                name: "Days left",
                value: `${daysUntilChristmas} days until Christmas`,
                inline: true,
              },
            ],
          },
        ],
      },
    };
  },
});
