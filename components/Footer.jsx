"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LuFacebook,
  LuInstagram,
  LuTwitter,
  LuYoutube,
  LuMail,
  LuPhone,
  LuMapPin,
  LuMusic2,
} from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Media Gallery", href: "#media" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Weddings", href: "#services" },
    { label: "Corporate Events", href: "#services" },
    { label: "Birthday Celebrations", href: "#services" },
    { label: "Church Services", href: "#services" },
    { label: "Tribute Nights", href: "#services" },
    { label: "Custom Packages", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: LuFacebook,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: LuInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: LuTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: LuYoutube,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  const contactInfo = [
    {
      icon: LuPhone,
      text: "08068494766",
      href: "tel:+2348068494766",
    },
    {
      icon: LuMail,
      text: "Officialrhythmandsound@gmail.com",
      href: "mailto:Officialrhythmandsound@gmail.com",
    },
    {
      icon: LuMapPin,
      text: "Lagos, Nigeria",
      href: null,
    },
  ];

  return (
    <footer className="bg-default-900 text-white dark:bg-default-950">
      {/* Main Footer */}
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <LuMusic2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rhythm & Sound</h3>
                <p className="text-sm text-white/60">Band</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Our team is more than musicians — we&lsquo;re a family dedicated
              to serving yours. Every performance is powered by passion,
              precision, and a promise to make your celebration unforgettable.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-white/70 hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-lg bg-white/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                          <info.icon className="h-4 w-4" />
                        </div>
                      </div>
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-white/70">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <info.icon className="h-4 w-4" />
                        </div>
                      </div>
                      <span className="text-sm">{info.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              >
                Book Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Rhythm & Sound Band. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
