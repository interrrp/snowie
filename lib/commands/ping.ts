import { createCommand } from "@/lib/utils/command";

export default createCommand({
  name: "ping",
  description: "Pong!",

  handle: async () => ({ content: "🏓 Pong!" }),
});
