"use client";

import Image from "next/image";
import {
  LuMusic2,
  LuUsers,
  LuSparkles,
  LuVolume2,
  LuTruck,
  LuCalendar,
  LuMicVocal,
} from "react-icons/lu";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: LuMusic2,
      title: "Standard Live Band",
      description:
        "A powerful 12‑piece live band featuring dynamic vocalists and instrumentalists. Our repertoire spans gospel, highlife, Afrobeat, Fuji, R&B, jazz, oldies, and pop classics.",
    },
    {
      icon: LuUsers,
      title: "Mini Orchestral / Quartet",
      description:
        "Elegant string ensembles or small band setups designed for intimate gatherings, tribute nights, corporate receptions, and refined celebrations.",
    },
    {
      icon: LuMicVocal,
      title: "Special Renditions",
      description:
        "Custom song arrangements, choir‑style pieces, and surprise performances crafted specifically for your event and personal story.",
    },
    {
      icon: LuVolume2,
      title: "Sound Reinforcement & Power",
      description:
        "Complete professional backline, Front‑of‑House (FOH) systems, monitors, and reliable power supply (generator included) — ensuring seamless sound from start to finish.",
    },
    {
      icon: LuTruck,
      title: "Logistics & Event Support",
      description:
        "We manage transportation, set‑up, breakdown, stage coordination, and on‑site support so you can focus on enjoying your event.",
    },
    {
      icon: LuCalendar,
      title: "Corporate & Private Events",
      description:
        "From weddings and birthdays to memorials, church services, and corporate galas, we deliver excellence with precision and professionalism.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Services
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-default-950">
            Our Packages
          </h2>
          <p className="mt-5 text-lg text-default-600 max-w-3xl mx-auto">
            We offer flexible, scalable packages tailored to your vision,
            audience, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Services Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative bg-default-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-default-200 hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-default-950 mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-default-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-default-950 mb-3">
                Need something unique?
              </h3>
              <p className="text-default-600 mb-6">
                We love a challenge. Let's create something special together.
              </p>
              <Link
                href="#contact"
                className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>

          {/* RIGHT: Image Collage */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Top Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-[300px] lg:h-auto">
                <Image
                  alt="Live band performance"
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2400&auto=format&fit=crop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Professional Excellence
                  </h4>
                  <p className="text-white/90 text-sm">
                    World-class musicians and vocalists
                  </p>
                </div>
              </div>

              {/* Bottom Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl h-[200px] lg:h-auto">
                  <Image
                    alt="Band setup"
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2400&auto=format&fit=crop"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      Premium Sound
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl h-[200px] lg:h-auto">
                  <Image
                    alt="Event performance"
                    src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2400&auto=format&fit=crop"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      Every Event Type
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
