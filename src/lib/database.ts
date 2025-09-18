import { sql } from "@vercel/postgres";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Contact extends ContactFormData {
  id: number;
  created_at: string;
}

export async function createContactsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log("Contacts table created successfully");
  } catch (error) {
    console.error("Error creating contacts table:", error);
    throw error;
  }
}

export async function insertContact(data: ContactFormData): Promise<Contact> {
  try {
    const result = await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${data.name}, ${data.email}, ${data.message})
      RETURNING id, name, email, message, created_at;
    `;

    return result.rows[0] as Contact;
  } catch (error) {
    console.error("Error inserting contact:", error);
    throw error;
  }
}

export async function getAllContacts(): Promise<Contact[]> {
  try {
    const result = await sql`
      SELECT id, name, email, message, created_at
      FROM contacts
      ORDER BY created_at DESC;
    `;

    return result.rows as Contact[];
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
}
