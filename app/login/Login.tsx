"use client";

import { signIn, signOut, useSession } from "next-auth/react";
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return <div></div>;
  }

  return <div></div>;
}
