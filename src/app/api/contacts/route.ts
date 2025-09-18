import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all contacts from the database
    const result = await sql`
      SELECT id, name, email, message, created_at
      FROM contacts
      ORDER BY created_at DESC;
    `;

    return NextResponse.json(
      {
        success: true,
        contacts: result.rows,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
