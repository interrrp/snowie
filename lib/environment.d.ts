declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";

      DISCORD_APPLICATION_ID: string;
      DISCORD_TOKEN: string;
      DISCORD_PUBLIC_KEY: string;

      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL_NON_POOLING: string;
    }
  }
}

export {};
