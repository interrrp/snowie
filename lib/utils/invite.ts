export default function generateInviteUrl(
  applicationId: string,
  scopes: string[] = ["bot", "applications.commands"],
) {
  return `https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=${scopes.join(
    "%20",
  )}`;
}
