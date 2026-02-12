"use client";

import { useState } from "react";
import Image from "next/image";
import { LuPlay, LuX } from "react-icons/lu";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: "videos", label: "Performance Videos" },
    { id: "photos", label: "Photo Gallery" },
    { id: "testimonials", label: "Client Testimonials" },
  ];

  // Video data - replace with actual YouTube/Vimeo IDs
  const videos = [
    {
      id: 1,
      title: "Wedding Performance Highlights",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      duration: "5:24",
      description: "A beautiful wedding celebration with soul-stirring music",
    },
    {
      id: 2,
      title: "Corporate Event - Product Launch",
      thumbnail:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "3:45",
      description: "High-energy performance for major product unveiling",
    },
    {
      id: 3,
      title: "Church Service - Worship Session",
      thumbnail:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "8:12",
      description: "Deeply moving worship experience",
    },
    {
      id: 4,
      title: "Owambe Party - Full Performance",
      thumbnail:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "6:30",
      description: "Electric atmosphere with traditional Nigerian sounds",
    },
    {
      id: 5,
      title: "Birthday Celebration Highlights",
      thumbnail:
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "4:18",
      description: "Joyful celebration with personalized song arrangements",
    },
    {
      id: 6,
      title: "Tribute Night Performance",
      thumbnail:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2400&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "7:55",
      description: "Honoring legends with heartfelt musical tributes",
    },
  ];

  // Photo gallery data
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2400&auto=format&fit=crop",
      title: "Live Band Performance",
      category: "Performance",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2400&auto=format&fit=crop",
      title: "Concert Stage Setup",
      category: "Setup",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2400&auto=format&fit=crop",
      title: "Band on Stage",
      category: "Performance",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2400&auto=format&fit=crop",
      title: "Vocalist Performance",
      category: "Performance",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2400&auto=format&fit=crop",
      title: "Wedding Performance",
      category: "Events",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2400&auto=format&fit=crop",
      title: "Instrumentalists",
      category: "Performance",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2400&auto=format&fit=crop",
      title: "Crowd Engagement",
      category: "Events",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2400&auto=format&fit=crop",
      title: "Corporate Event",
      category: "Events",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
      title: "Elegant Setup",
      category: "Setup",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Taiwo & Adebayo",
      event: "Wedding Celebration",
      image:
        "https://images.unsplash.com/photo-1494790778108-2e29b8836932?q=80&w=800&auto=format&fit=crop",
      quote:
        "You guys MADE our wedding! The energy, the professionalism, the music selection - everything was absolutely perfect. Our guests are still talking about it weeks later.",
      rating: 5,
    },
    {
      id: 2,
      name: "Zapphaire Events",
      event: "Event Planning Partner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      quote:
        "Professional, energetic, and unforgettable. Rhythm & Sound Band consistently exceeds expectations. They're our go-to band for high-profile events.",
      rating: 5,
    },
    {
      id: 3,
      name: "Chidi Okonkwo",
      event: "Corporate Gala",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      quote:
        "We hired them for our annual corporate gala and they delivered beyond our wildest expectations. The band understood our vision perfectly and brought it to life.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pastor & Mrs. Adeleke",
      event: "Church Anniversary",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop",
      quote:
        "The worship session they led was deeply moving. Every musician and vocalist brought their A-game. Our congregation was blessed beyond measure.",
      rating: 5,
    },
    {
      id: 5,
      name: "Bimpe Adeyemi",
      event: "50th Birthday Celebration",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
      quote:
        "They made my mother's 50th birthday unforgettable! The custom song arrangement for her was the highlight of the night. Thank you for the memories!",
      rating: 5,
    },
    {
      id: 6,
      name: "Woodhall Capital",
      event: "Corporate Partner",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      quote:
        "Rhythm & Sound Band brings sophistication and energy to every event. Their attention to detail and musical excellence is unmatched in the industry.",
      rating: 5,
    },
  ];

  return (
    <section id="media" className="py-20 lg:py-32 bg-default-50">
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-default-950">
            Media Gallery
          </h2>
          <p className="mt-5 text-lg text-default-600 max-w-3xl mx-auto">
            Live performance videos, event highlights, photo galleries, and
            client testimonials showcasing the Rhythm & Sound Band experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-default-700 hover:bg-primary/10 border border-default-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-default-200 hover:border-primary/30 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <LuPlay className="h-10 w-10 text-primary ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-default-950 mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-default-600 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full mb-2">
                    {photo.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-default-200 hover:border-primary/30"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-default-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-default-200">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-default-950">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-default-600">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300"
            >
              <LuX className="h-8 w-8" />
            </button>

            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-white/80">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300"
            >
              <LuX className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="relative h-[70vh] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;
