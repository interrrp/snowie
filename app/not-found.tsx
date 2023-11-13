import Image from "next/image";
import Link from "next/link";

import Snowfall from "@/components/snowfall";

export default function NotFound() {
  return (
    <main className="h-full flex flex-col gap-8 justify-center items-center p-16">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-muted-foreground">
        are you lost, bbg?{" "}
        <Link href="/" className="text-blue-500 underline">
          Go back
        </Link>
      </p>
      <Image
        src="/are-you-lost.png"
        width={512}
        height={512}
        alt="An image of a pufferfish staring into the camera with the text 'r u lost bbg?'"
        className="rounded-xl"
      />

      <Snowfall />
    </main>
  );
}
