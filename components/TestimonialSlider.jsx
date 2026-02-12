"use client";

import { LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

import { testimonialSlides } from "@/lib/data";

import "swiper/css";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              What People Says?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="mx-auto">
            <div className="relative z-10">
              <div className="absolute inset-y-0 -start-20 -z-10 hidden h-full w-full rounded-full border-2 border-default-200 sm:block" />
              <Image
                alt="Testimonial illustration"
                src="/assets/images/landing/creative/img-6.png"
                width={320}
                height={320}
                className="rounded-full"
                priority
              />
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative">
            <Swiper
              modules={[Thumbs, FreeMode]}
              loop
              className="testimonials relative rounded-md"
            >
              {testimonialSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-md bg-default-50 p-6">
                    <div className="flex items-center gap-5">
                      <Image
                        alt={slide.name}
                        src={slide.image}
                        width={56}
                        height={56}
                        className="rounded-full border-4 border-white/20"
                      />
                      <h3 className="text-lg font-medium text-default-950">
                        {slide.name}
                      </h3>
                    </div>

                    <p className="mt-4 text-base text-default-700">
                      {slide.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <LuStar
                          key={starIdx}
                          className="h-5 w-5 fill-current text-yellow-300"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
