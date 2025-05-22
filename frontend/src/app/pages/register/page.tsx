import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-800">Register</h1>
      <p className="mt-4 text-gray-600">
        This will be your registration form.
      </p>
      <Link href="/" className="mt-8 text-blue-600 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
