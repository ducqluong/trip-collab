// frontend/src/app/page.tsx
import Link from "next/link"; // Import Link for client-side navigation

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold text-gray-800">Welcome!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your collaborative travel adventure begins here.
      </p>
      <nav className="mt-8">
        <Link href="/login" className="text-blue-600 hover:underline mx-4">
          Login
        </Link>
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline mx-4"
        >
          Dashboard
        </Link>
        <Link
          href="/trips/example-trip-id"
          className="text-blue-600 hover:underline mx-4"
        >
          Example Trip
        </Link>
      </nav>
    </div>
  );
}
