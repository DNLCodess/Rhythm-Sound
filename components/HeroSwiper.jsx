"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Thumbs,
  Controller,
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

// High-quality live band performance images from Unsplash
const thumbImages = [
  "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2400&auto=format&fit=crop", // Live band performance
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2400&auto=format&fit=crop", // Concert/event performance
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2400&auto=format&fit=crop", // Band on stage
];

const heroSlides = [
  {
    title: "Exceptional Live Music. Unforgettable Moments.",
    description:
      "From weddings and birthdays to corporate galas, tribute nights, services of song, and Owambe celebrations, Rhythm & Sound Band delivers vibrant, soul‑stirring live music that leaves a lasting impression.",
  },
  {
    title: "Premier Nigerian Live Band",
    description:
      "With over a decade of experience, we have performed for weddings, corporate events, memorials, worship services, and high‑profile celebrations across Nigeria.",
  },
  {
    title: "Trusted by Leading Brands",
    description:
      "Proud to be trusted by Zapphaire Events, Mandarin Events, The Ikoyi Club, Ecobank, Woodhall Capital, The Elevation Church, and many more.",
  },
];

const HeroSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    document.body.classList.add("bg-default-100");
    return () => {
      document.body.classList.remove("bg-default-100");
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[url('/assets/images/other/bg-lines-2.png')] bg-cover bg-no-repeat dark:bg-[url('/assets/images/other/bg-lines-2-dark.png')]"
    >
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-5 xl:min-h-screen">
        {/* LEFT: IMAGE SWIPER */}
        <div className="xl:col-span-3 h-105 md:h-130 xl:h-screen">
          <Swiper
            onSwiper={setThumbsSwiper}
            speed={1000}
            watchSlidesProgress
            loop={false}
            effect="fade"
            modules={[Thumbs, EffectFade]}
            className="swiper-hero h-full w-full"
          >
            {thumbImages.map((image, idx) => (
              <SwiperSlide key={idx} className="relative h-full">
                <Image
                  src={image}
                  alt={`Rhythm & Sound Band performance ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1280px) 100vw, 60vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: TEXT SWIPER */}
        <div className="relative p-6 xl:col-span-2 xl:p-10 xl:py-20">
          <Swiper
            speed={1000}
            spaceBetween={10}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            watchSlidesProgress
            loop
            modules={[Thumbs, Controller, Autoplay, Navigation]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            navigation={{
              nextEl: ".cre-button-next",
              prevEl: ".cre-button-prev",
            }}
            className="swiper-hero relative me-10"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex h-full flex-col items-start justify-end">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-default-950 leading-tight max-w-2xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-base md:text-lg font-medium text-default-700 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                  {idx === 0 && (
                    <Link
                      href="#contact"
                      className="mt-8 inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Book Us Now
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSwiper;
