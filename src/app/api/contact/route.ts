import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create the contacts table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert the contact form data
    const result = await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${name}, ${email}, ${message})
      RETURNING id, created_at;
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully!",
        id: result.rows[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit contact form. Please try again.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
