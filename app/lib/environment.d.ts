declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";

      DISCORD_PUBLIC_KEY: string;
      DISCORD_APPLICATION_ID: string;
    }
  }
}

export {};
