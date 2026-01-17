import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (status.msg) setStatus({ type: "", msg: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center text-center">
          <Title title={"CONTACT"} desc={"US"} />
        </div>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Image Panel */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
              <img
                src={assets.contact_img}
                alt="Contact"
                className="w-full h-64 sm:h-80 lg:h-[560px] object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              {/* Floating chip */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
                <div className="bg-white/90 backdrop-blur border border-white/60 shadow-sm rounded-2xl px-4 py-3">
                  <p className="text-xs text-gray-500">Visit us</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    Bashundhara, Dhaka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-6 lg:flex lg:items-center">
            <div className="w-full bg-white border rounded-3xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Get in touch
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Have questions about orders, products, or support? Reach out using the details
                below or send a message.
              </p>

              {/* Info row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-2xl p-4">
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-gray-900">
                    House 388, Road 4, Block G,<br />
                    Bashundhara, Dhaka
                  </p>
                </div>

                <div className="border rounded-2xl p-4">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-gray-900 break-words">
                    toriquilislam56@gmail.com
                  </p>
                  <p className="mt-1 text-xs text-gray-500">Reply within 24 hours</p>
                </div>

                <div className="border rounded-2xl p-4 sm:col-span-2">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-gray-900">
                    +123 456 7890
                  </p>
                  <p className="mt-1 text-xs text-gray-500">10:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:toriquilislam56@gmail.com"
                  className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium text-center hover:bg-gray-800 transition"
                >
                  Email Us
                </a>
                <a
                  href="tel:+1234567890"
                  className="w-full sm:w-auto border px-5 py-2.5 rounded-xl text-sm font-medium text-center hover:bg-gray-50 transition"
                >
                  Call Now
                </a>
              </div>

              {/* Form */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">Send a message</h3>

                {status.msg && (
                  <div
                    className={`mt-3 text-sm rounded-xl px-4 py-3 border ${
                      status.type === "error"
                        ? "bg-red-50 border-red-200 text-red-700"
                        : "bg-green-50 border-green-200 text-green-700"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-700">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your name"
                        className="mt-1 w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-700">Email *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="What is this about?"
                      className="mt-1 w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message..."
                      className="mt-1 w-full border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 focus:border-black resize-none"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      Please don’t share passwords or sensitive payment information.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Note */}
              <div className="mt-6 pt-4 border-t">
                <p className="text-xs sm:text-sm text-gray-600">
                  For faster support, mention your{" "}
                  <span className="font-medium text-gray-900">Order ID</span> if applicable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
