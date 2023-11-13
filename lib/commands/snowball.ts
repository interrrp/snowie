import {
  APIEmbed,
  ApplicationCommandOptionType,
  InteractionResponseType,
} from "discord-api-types/v10";

import { randomColor } from "@/lib/colors";
import { createCommand, getOption } from "@/lib/commands/command";
import {
  getOrCreateUser,
  incrementSnowballsThrown,
  incrementTimesHitBySnowball,
} from "@/lib/db";

export default createCommand({
  name: "snowball",
  description: "Throw a snowball at someone",
  example: "@interrrp",
  options: [
    {
      type: ApplicationCommandOptionType.User,
      name: "target",
      description: "The user to throw a snowball at",
      required: true,
    },
  ],
  async handle(interaction) {
    const attacker = interaction.member?.user!;
    const targetId = getOption<string>(interaction, "target");
    const targetName = interaction.data.resolved?.users?.[targetId]?.username;

    await getOrCreateUser(attacker.id);
    await getOrCreateUser(targetId);
    const attackerData = await incrementSnowballsThrown(attacker.id);
    const targetData = await incrementTimesHitBySnowball(targetId);

    const embed: APIEmbed = {
      title: "❄️ Snowball fight!",
      description: `💢 <@${attacker.id}> threw a snowball at <@${targetId}>!`,
      color: randomColor(),
      fields: [
        {
          name: `👊 Snowballs thrown by ${
            attacker.global_name || attacker.username
          }`,
          value: `${attackerData.snowballsThrown} 🤾`,
          inline: true,
        },
        {
          name: `🎯 Times ${targetName} was hit by a snowball`,
          value: `${targetData.timesHitBySnowball} 💢`,
          inline: true,
        },
      ],
    };

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { embeds: [embed] },
    };
  },
});
