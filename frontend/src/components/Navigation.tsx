"use client";

import { logout } from "@/utils/auth";

export default function Navigation() {
  return (
    <nav className="mt-8">
      <button
        onClick={logout}
        className="text-blue-600 hover:underline mx-4"
      >
        Logout
      </button>
    </nav>
  );
}
