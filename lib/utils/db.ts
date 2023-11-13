import db from "@/lib/db";

export async function getOrCreateUser(discordId: string) {
  return await db.user.upsert({
    where: { discordId },
    update: {},
    create: { discordId },
  });
}

export async function incrementSnowballsThrown(discordId: string) {
  return await db.user.update({
    where: { discordId },
    data: {
      snowballsThrown: { increment: 1 },
    },
  });
}

export async function incrementTimesHitBySnowball(discordId: string) {
  return await db.user.update({
    where: { discordId },
    data: {
      timesHitBySnowball: { increment: 1 },
    },
  });
}
