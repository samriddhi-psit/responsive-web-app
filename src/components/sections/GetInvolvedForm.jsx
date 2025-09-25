import { useState } from "react";

export default function GetInvolvedForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setSuccess("");

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess("✅ Your message has been submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Get Involved
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Have questions or want to collaborate? Fill out the form below and
          we’ll get back to you.
        </p>

        <div className="mt-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-10">
          {success && (
            <div className="mb-6 text-green-600 font-medium">{success}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`mt-2 w-full rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`mt-2 w-full rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className={`mt-2 w-full rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className={`px-8 py-3 rounded-full text-white font-semibold shadow-lg transition transform hover:scale-105 ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                }`}
              >
                {submitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5 animate-spin text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v1m0 14v1m8-9h1M4 12H3m15.364-6.364l.707.707M6.343 17.657l-.707.707M17.657 17.657l.707-.707M6.343 6.343l-.707-.707"
                      />
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
