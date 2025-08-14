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

  return <div></div>;
}
