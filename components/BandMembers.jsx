"use client";

import Image from "next/image";
import { useState } from "react";
import {
  LuMusic,
  LuGuitar,
  LuDrum,
  LuMic,
  LuHeadphones,
  LuVideo,
  LuUsers,
} from "react-icons/lu";

const BandMembers = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Members" },
    { id: "leadership", label: "Leadership" },
    { id: "vocalists", label: "Vocalists" },
    { id: "instrumentalists", label: "Instrumentalists" },
    { id: "technical", label: "Technical Team" },
  ];

  const members = [
    {
      name: "Omowale Olunlade",
      role: "Founder | CEO | Lead Vocalist",
      category: "leadership",
      description:
        "A passionate worship leader and vocalist who blends spiritual depth with artistic excellence. Under his leadership, the band has grown into a respected force in Nigeria's live music and events industry.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      icon: LuMusic,
    },
    {
      name: "Titus Tobore",
      role: "Band Leader | Lead Guitarist | Music Director",
      category: "leadership",
      description:
        "The driving force behind the band's sound, Titus combines strong leadership with masterful guitar work, shaping each performance with clarity and musical precision.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      icon: LuGuitar,
    },
    {
      name: "Damola",
      role: "Drummer & Percussionist",
      category: "instrumentalists",
      description:
        "The energy engine of the band. Damola's rhythm drives the groove and keeps the dance floor alive from the first note to the final beat.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      icon: LuDrum,
    },
    {
      name: "Bunmi Alagbe",
      role: "Lead Talking Drummer",
      category: "instrumentalists",
      description:
        "With expressive precision and cultural flair, Bunmi commands the talking drum, setting the tone for celebration and connection.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      icon: LuDrum,
    },
    {
      name: "Dayo",
      role: "Talking Drummer",
      category: "instrumentalists",
      description:
        "Dayo adds depth and traditional fire to the rhythm section with rich, dynamic talking drum expressions.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      icon: LuDrum,
    },
    {
      name: "Samuel",
      role: "Percussionist",
      category: "instrumentalists",
      description:
        "A master of samplers and bata drum, Samuel brings texture, rhythm, and cultural richness to every performance.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      icon: LuDrum,
    },
    {
      name: "Yinka Atoki",
      role: "Bassist | Assistant Band Leader | Stage Tech Support",
      category: "instrumentalists",
      description:
        "Yinka anchors the groove with solid basslines while ensuring backstage coordination runs smoothly.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      icon: LuGuitar,
    },
    {
      name: "Trypheana Tobi",
      role: "Lead Vocalist | Wardrobe & Costume Coordinator",
      category: "vocalists",
      description:
        "Graceful on stage and visionary behind the scenes, Tobi delivers powerful vocals and curates the band's signature look.",
      image:
        "https://images.unsplash.com/photo-1494790778108-2e29b8836932?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Raphael Temitope",
      role: "Lead Vocalist",
      category: "vocalists",
      description:
        "Smooth, soulful, and nostalgic — Raphael brings timeless R&B classics to life.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Seyi",
      role: "Lead Vocalist",
      category: "vocalists",
      description:
        "A vocal powerhouse with range and emotional depth, delivering every note with intensity and presence.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Gbenga",
      role: "Lead Vocalist",
      category: "vocalists",
      description:
        "From Alujo and Apala to highlife and Afrobeat, Gbenga channels rich Nigerian heritage into every performance.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Bolu",
      role: "Lead Vocalist",
      category: "vocalists",
      description:
        "Versatile and dynamic, Bolu's vocal agility adds colour and depth across multiple genres.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Ogabi",
      role: "Lead Vocalist – Gospel | Fuji | Highlife | Afrobeat",
      category: "vocalists",
      description:
        "A rich blend of gospel soul and indigenous Nigerian sound, delivered with power and authenticity.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Jancy",
      role: "Lead Vocalist | Vocal Coach",
      category: "vocalists",
      description:
        "Blending gospel, jazz, and R&B, Jancy brings depth to the stage while mentoring the next generation of vocalists.",
      image:
        "https://images.unsplash.com/photo-1494790778108-2e29b8836932?q=80&w=800&auto=format&fit=crop",
      icon: LuMic,
    },
    {
      name: "Onvaiteru Elisha Obo",
      role: "Front‑of‑House (FOH) Sound Engineer",
      category: "technical",
      description:
        "Elisha ensures clean, balanced, and powerful sound at every event, shaping the band's signature live experience.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      icon: LuHeadphones,
    },
    {
      name: "Tosin",
      role: "Sound Engineer",
      category: "technical",
      description:
        "Responsible for FOH and backline, Tosin guarantees flawless sound with zero stress.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      icon: LuHeadphones,
    },
    {
      name: "Eniola",
      role: "Stage Manager",
      category: "technical",
      description:
        "Eniola oversees on‑site logistics and guest engagement, ensuring seamless coordination throughout each event.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      icon: LuUsers,
    },
    {
      name: "Tega",
      role: "Visuals & Media Team",
      category: "technical",
      description:
        "Capturing moments that last, Tega leads the visual storytelling behind the band's performances.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      icon: LuVideo,
    },
  ];

  const filteredMembers =
    activeCategory === "all"
      ? members
      : members.filter((member) => member.category === activeCategory);

  return (
    <section id="team" className="py-20 lg:py-32 bg-default-50">
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-default-950">
            Band Members
          </h2>
          <p className="mt-5 text-lg text-default-600 max-w-3xl mx-auto">
            Our team is more than musicians — we&lsquo;re a family dedicated to
            serving yours. Every performance is powered by passion, precision,
            and a promise to make your celebration unforgettable.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-default-700 hover:bg-primary/10 border border-default-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-default-200 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <member.icon className="h-6 w-6 text-white" />
                </div>

                {/* Name & Role Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/90 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-default-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
