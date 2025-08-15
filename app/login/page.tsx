"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/"); // after login, redirect somewhere
  }, [session, router]);

  if (session) return <div>Redirecting…</div>;

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-120 h-140 rounded-3xl border-2 border-black shadow-lg overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#9a9a9a] via-[#707070] to-[#454545]"></div>
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#454545] via-[#707070] to-[#9a9a9a] opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
