"use client";

import Image from "next/image";
import { LuMusic, LuTarget, LuUsers, LuShield } from "react-icons/lu";

const AboutUs = () => {
  const features = [
    {
      icon: LuMusic,
      title: "Who We Are",
      description:
        "Founded in 2013, Rhythm & Sound Band is where vibrant live music meets exceptional service. From deeply soulful worship sessions to high‑energy party sets, we curate musical experiences that connect, uplift, and leave lasting memories.",
    },
    {
      icon: LuTarget,
      title: "Our Vision",
      description:
        "To be known, respected, and followed in the event industry as the band that sets the standard for energy, professionalism, and world‑class live music.",
    },
    {
      icon: LuUsers,
      title: "Our Team",
      description:
        "We are a collective of gifted musicians, vocalists, sound engineers, and logistics professionals — united by passion, discipline, and a shared commitment to excellence.",
    },
    {
      icon: LuShield,
      title: "Our Promise",
      description:
        "When you book Rhythm & Sound Band, you get more than a performance. You get peace of mind, unmatched energy, professional execution, and a musical memory that lingers long after the final note.",
    },
  ];

  const clients = [
    "Zapphaire Events",
    "Woodhall Capital",
    "Ecobank",
    "Eventful",
    "The Elevation Church",
    "The Adenugas",
    "Sally's Wine",
    "CFA Society",
    "E‑Motion Advertising",
    "FSDH Merchant Bank",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-default-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-default-950 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2400&auto=format&fit=crop"
              alt="Rhythm & Sound Band performing live"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-primary">10+</h4>
                  <p className="text-xs text-default-600 mt-1">Years</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">500+</h4>
                  <p className="text-xs text-default-600 mt-1">Events</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">15+</h4>
                  <p className="text-xs text-default-600 mt-1">Musicians</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-default-200 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-default-950 mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-default-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-default-950 mb-3">
              Our Clients
            </h3>
            <p className="text-default-600 max-w-3xl mx-auto">
              We are honoured to partner with leading brands, planners,
              institutions, and families who trust us with their most important
              moments.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="group relative bg-default-50 rounded-lg p-6 hover:bg-primary/5 transition-all duration-300 border border-default-200 hover:border-primary/30 flex items-center justify-center text-center"
              >
                <p className="text-sm font-semibold text-default-700 group-hover:text-primary transition-colors duration-300">
                  {client}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-10 text-center">
            <p className="text-default-500 italic">
              ...and many more trusted partners across Nigeria
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default AboutUs;
