"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { cn } from "@/utils";

import "swiper/css";
import Image from "next/image";

const ProjectSwiper = ({ slides, bgBlack }) => {
  return (
    <Swiper
      modules={[Thumbs, FreeMode]}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
      className="relative rounded-md"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="group relative overflow-hidden rounded-3xl">
            {/* Use fill to make it responsive */}
            <div className="relative h-64 w-full md:h-80 lg:h-96">
              <Image
                alt="slide-image"
                src={slide.image}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay */}
            <div className={cn("absolute inset-0", bgBlack && "bg-black/40")} />

            {/* Hover Text */}
            <div className="absolute inset-x-0 top-1/2 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <div className="text-center">
                <h5 className="mb-1 inline-block bg-black px-3 py-1 text-xl font-medium text-white">
                  {slide.title}
                </h5>
                <br />
                <h2 className="inline-block bg-black px-3 py-1 text-2xl font-medium text-white">
                  {slide.subTitle}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
