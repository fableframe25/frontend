"use client";

import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

export function ContactSection() {
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Form validation
  const validateForm = () => {
    if (!name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!message.trim()) {
      setError("Message is required");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }

    return true;
  };

  // Handle contact form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(
          "Thank you! Your message has been sent successfully. We'll get back to you soon!"
        );
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-12 pb-4 pr-4 sm:pb-6 sm:pr-6 md:pb-8 md:pr-8 relative">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden rounded-[8vw] sm:rounded-[10vw] md:rounded-[12vw]">
        {/* Modern Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block w-8 h-8 bg-green-500 rounded-md mb-2"></span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              We&apos;d love to hear from you! Fill out the form below and our
              team will get back to you soon.
            </p>
          </div>
        </div>
        {/* Centered Contact Form */}
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center w-full max-w-5xl bg-neutral-100 dark:bg-[#111214] rounded-xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-green-500 dark:border-green-500 overflow-hidden">
            <form
              className="flex flex-col gap-4 sm:gap-5 md:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  placeholder="e.g. John Smith"
                  required
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="e.g. example@gmail.com"
                  required
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 text-sm sm:text-base h-10 sm:h-11 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-black dark:text-white"
                >
                  Message <span className="text-red-500">*</span>
                  <span className="text-xs text-gray-500 ml-1">
                    (min. 10 characters)
                  </span>
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                  placeholder="Let us know how we can help you..."
                  required
                  minLength={10}
                  className="bg-neutral-100 dark:bg-[#18181b] border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder:text-neutral-400 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base focus:border-green-500 focus:ring-green-500"
                />
                <div className="text-xs text-gray-500 text-right">
                  {message.length}/10 characters minimum
                </div>
              </div>
              <Button
                type="submit"
                disabled={
                  loading || !name || !email || !message || message.length < 10
                }
                className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed dark:bg-green-500 dark:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* Success Message */}
              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {success}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
