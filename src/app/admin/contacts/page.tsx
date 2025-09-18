"use client";

import React, { useState, useEffect } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts");
      const data = await response.json();

      if (data.success) {
        setContacts(data.contacts);
      } else {
        setError("Failed to fetch contacts");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Form Submissions
            </h1>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {contacts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No contacts found.</p>
              </div>
            ) : (
              <div className="overflow-hidden">
                <div className="space-y-6">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="bg-gray-50 rounded-lg p-6 border"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {contact.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {contact.email}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className="text-sm text-gray-500">
                            {formatDate(contact.created_at)}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded p-4 border">
                        <p className="text-gray-800 whitespace-pre-wrap">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Total contacts: {contacts.length}
              </p>
              <button
                onClick={fetchContacts}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
