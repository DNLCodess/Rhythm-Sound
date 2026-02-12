"use client";

import { useState } from "react";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuSend,
} from "react-icons/lu";

const BookingContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventVenue: "",
    eventType: "",
    estimatedGuests: "",
    budgetRange: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventVenue: "",
        eventType: "",
        estimatedGuests: "",
        budgetRange: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: LuPhone,
      title: "Phone",
      content: "08068494766",
      link: "tel:+2348068494766",
    },
    {
      icon: LuMail,
      title: "Email",
      content: "Officialrhythmandsound@gmail.com",
      link: "mailto:Officialrhythmandsound@gmail.com",
    },
    {
      icon: LuMapPin,
      title: "Location",
      content: "Lagos, Nigeria",
      link: null,
    },
    {
      icon: LuMessageCircle,
      title: "WhatsApp",
      content: "Click to Chat",
      link: "https://wa.me/2348068494766",
    },
  ];

  const eventTypes = [
    "Wedding",
    "Birthday",
    "Tribute Night",
    "Corporate Event",
    "Church Service",
    "Memorial Service",
    "Owambe Party",
    "Other",
  ];

  const budgetRanges = [
    "Under ₦500,000",
    "₦500,000 - ₦1,000,000",
    "₦1,000,000 - ₦2,000,000",
    "₦2,000,000 - ₦5,000,000",
    "Above ₦5,000,000",
    "Prefer to Discuss",
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Get in Touch
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-default-950">
            Let's Make Your Event Unforgettable
          </h2>
          <p className="mt-5 text-lg text-default-600 max-w-3xl mx-auto">
            Got an event coming up? Let's create something magical together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group bg-default-50 rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 border border-default-200 hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <info.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-default-950 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.title === "WhatsApp" ? "_blank" : undefined
                          }
                          rel={
                            info.title === "WhatsApp"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-default-600 hover:text-primary transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-default-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-default-950 mb-3">
                Quick Response Guarantee
              </h3>
              <p className="text-default-600 leading-relaxed">
                We'll respond within 24 hours — because your celebration
                deserves our full attention.
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-default-50 rounded-xl p-6 border border-default-200">
              <h3 className="text-lg font-bold text-default-950 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-default-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-default-50 rounded-2xl p-8 md:p-10 shadow-lg border border-default-200"
            >
              <h3 className="text-2xl font-bold text-default-950 mb-6">
                Request a Quote
              </h3>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">
                    ✓ Thank you! Your booking request has been received. We'll
                    get back to you within 24 hours.
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="080XXXXXXXX"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>

                {/* Event Venue */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="eventVenue"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Event Venue *
                  </label>
                  <input
                    type="text"
                    id="eventVenue"
                    name="eventVenue"
                    value={formData.eventVenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="Event location or venue name"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Guests */}
                <div>
                  <label
                    htmlFor="estimatedGuests"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    id="estimatedGuests"
                    name="estimatedGuests"
                    value={formData.estimatedGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="Approximate number"
                  />
                </div>

                {/* Budget Range */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="budgetRange"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-default-950 mb-2"
                  >
                    Tell us about your vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-default-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Share your event details, special requests, or any questions you have..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <LuSend className="h-5 w-5" />
                      Request a Quote
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 text-sm text-default-500 text-center">
                By submitting this form, you agree to be contacted by Rhythm &
                Sound Band regarding your event.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;
