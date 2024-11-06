"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <NextUIProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
            <Button onClick={() => router.push("/guitar")}>Fretboard</Button>
          </div>
        </main>
      </div>
    </NextUIProvider>
  );
}
