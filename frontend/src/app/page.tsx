// frontend/src/app/page.tsx
import Navigation from "@/components/Navigation";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold text-gray-800">Welcome!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your collaborative travel adventure begins here.
      </p>
      <Navigation />
    </div>
  );
}
