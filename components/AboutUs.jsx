"use client";

import Image from "next/image";
import { LuMusic, LuTarget, LuUsers, LuShield } from "react-icons/lu";

const AboutUs = () => {
  const features = [
    {
      icon: LuMusic,
      title: "Who We Are",
      description:
        "Founded in 2013, Rhythm & Sound Band is where vibrant live music meets exceptional service.",
    },
    {
      icon: LuTarget,
      title: "Our Vision",
      description:
        "To be known, respected, and followed in the event industry as the band that sets the standard.",
    },
    {
      icon: LuUsers,
      title: "Our Team",
      description:
        "A collective of gifted musicians, vocalists, and sound engineers united by passion.",
    },
    {
      icon: LuShield,
      title: "Our Promise",
      description:
        "Peace of mind, unmatched energy, and a musical memory that lingers.",
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
    <section
      id="about"
      className="w-full bg-primary py-12 lg:py-16 overflow-hidden"
    >
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4">
          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* About Us Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-default-950 text-2xl sm:text-3xl font-bold mb-3">
                About Us
              </h2>
              <p className="text-default-600 text-sm leading-relaxed">
                Founded in 2013, Rhythm & Sound Band is where vibrant live music
                meets exceptional service across Nigeria.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">10+</span>
                  </div>
                  <div>
                    <p className="text-xs text-default-500 uppercase">Years</p>
                    <p className="text-sm text-default-700 font-medium">
                      Of Excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">500+</span>
                  </div>
                  <div>
                    <p className="text-xs text-default-500 uppercase">Events</p>
                    <p className="text-sm text-default-700 font-medium">
                      Delivered
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">15+</span>
                  </div>
                  <div>
                    <p className="text-xs text-default-500 uppercase">
                      Musicians
                    </p>
                    <p className="text-sm text-default-700 font-medium">
                      Talented Team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image Card */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2400&auto=format&fit=crop"
                alt="Band performance setup"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Center Column - Large Image */}
          <div className="lg:col-span-6">
            <div className="relative h-[400px] lg:h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2400&auto=format&fit=crop"
                alt="Rhythm & Sound Band performing live"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <h3 className="text-lg font-bold text-default-950 mb-1">
                  Live Music Excellence
                </h3>
                <p className="text-sm text-default-600">
                  Every performance powered by passion and precision.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Core Values Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-default-950 text-2xl sm:text-3xl font-bold mb-4">
                What Defines Us
              </h2>
              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                        <feature.icon className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-default-950 text-base font-bold group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-default-600 text-xs leading-relaxed pl-10">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Image Card */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2400&auto=format&fit=crop"
                alt="Band vocalists performing"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Clients Section Below Bento Grid */}
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-default-950 mb-2">
              Trusted Partners
            </h3>
            <p className="text-sm text-default-600 max-w-3xl mx-auto">
              We partner with leading brands, planners, institutions, and
              families across Nigeria.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="group relative bg-default-50 rounded-lg p-4 hover:bg-primary/5 transition-all duration-300 border border-default-200 hover:border-primary/30 flex items-center justify-center text-center"
              >
                <p className="text-xs font-semibold text-default-700 group-hover:text-primary transition-colors duration-300">
                  {client}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 text-center">
            <p className="text-sm text-default-500 italic">
              ...and many more trusted partners across Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
