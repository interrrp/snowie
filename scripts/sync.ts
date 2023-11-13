import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import "dotenv/config";

import { COMMANDS } from "@/lib/commands";

(async () => {
  console.log("Syncing...");

  await new REST({ version: "10" })
    .setToken(process.env.DISCORD_TOKEN)
    .put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID), {
      body: COMMANDS,
    });

  console.log(`Done! Synced ${COMMANDS.length} commands.`);
})();
