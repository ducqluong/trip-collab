import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome to your trip dashboard!</p>
      <Link href="/" className="mt-8 text-blue-600 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
