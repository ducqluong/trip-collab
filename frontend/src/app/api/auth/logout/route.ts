import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Create response with success message
    const response = NextResponse.json({ message: "Logout successful" });

    // Clear the token cookie
    response.cookies.delete("token");

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
