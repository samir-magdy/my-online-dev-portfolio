"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Failed to send message";

      setStatus("error");
      setErrorMessage(errorMsg);

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <form
      className="text-start pt-2 relative"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-gray-300 mb-2 ms-1"
        >
          Name{" "}
          <span className="text-orange-600 opacity-90" aria-label="required">
            *
          </span>
        </label>
        <input
          type="text"
          id="name"
          required
          aria-required="true"
          placeholder="Your name"
          className="mb-4 text-xl w-full h-14 px-4 rounded-lg border border-gray-700 bg-gray-900/95 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-300 mb-2 ms-1"
        >
          Email{" "}
          <span className="text-orange-600 opacity-90" aria-label="required">
            *
          </span>
        </label>
        <input
          type="email"
          id="email"
          required
          aria-required="true"
          placeholder="Your email"
          className="mb-4 text-xl w-full h-14 px-4 rounded-lg border border-gray-700 bg-gray-900/95 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-gray-300 mb-2 ms-1"
        >
          Message{" "}
          <span className="text-orange-600 opacity-90" aria-label="required">
            *
          </span>
        </label>
        <textarea
          id="message"
          required
          aria-required="true"
          rows={4}
          placeholder="Describe your project or inquiry..."
          className="mb-4 text-xl w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/95 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="w-full mx-auto block bg-blue-800 font-bold text-lg py-4 hover:bg-blue-900/90 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Submit Form"}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-5 md:absolute md:-bottom-20 md:left-0 md:right-0 md:mt-0 w-full text-lg mx-auto py-4 rounded-lg border border-green-500/30 bg-green-800/80 backdrop-blur-sm px-2 md:px-8"
          >
            <p className="flex gap-1 justify-center text-green-200 text-center font-medium md:font-bold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Message sent successfully!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {status === "error" && (
        <motion.div
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-5 md:absolute md:-bottom-20 md:left-0 md:right-0 md:mt-0 mx-auto py-4 rounded-lg border border-red-500/30 bg-red-800/60 backdrop-blur-sm w-full px-1"
        >
          <p className="text-red-200 text-center font-medium md:font-bold">
            {errorMessage}
          </p>
        </motion.div>
      )}
    </form>
  );
}
