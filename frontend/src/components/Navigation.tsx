"use client";

import Link from "next/link";
import { logout } from "@/utils/auth";

export default function Navigation() {
  return (
    <nav className="mt-8">
      <Link
        href="/dashboard"
        className="text-blue-600 hover:underline mx-4"
      >
        Dashboard
      </Link>
      <button
        onClick={logout}
        className="text-blue-600 hover:underline mx-4"
      >
        Logout
      </button>
    </nav>
  );
}
