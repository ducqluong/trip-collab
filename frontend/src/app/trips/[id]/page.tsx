// frontend/src/app/trips/[id]/page.tsx
"use client"; // This directive is needed because we're using a client-side hook (useParams)

import { useParams } from "next/navigation"; // Correct import for App Router
import Link from "next/link";

export default function TripDetailPage() {
  // useParams is a client-side hook, so 'use client' is required at the top of the file.
  const params = useParams();
  const tripId = params.id as string; // Assert the type of `id` to string

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-800">
        Trip Detail Page
      </h1>
      <p className="mt-4 text-gray-600">
        You are viewing details for Trip ID:{" "}
        <span className="font-semibold text-blue-700">{tripId}</span>
      </p>
      <nav className="mt-8">
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline mx-4"
        >
          Go to Dashboard
        </Link>
        <Link href="/" className="text-blue-600 hover:underline mx-4">
          Go to Home
        </Link>
      </nav>
    </div>
  );
}
