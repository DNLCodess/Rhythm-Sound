const ServicesMarquee = () => {
  const services = [
    "Weddings",
    "Corporate Events",
    "Birthday Celebrations",
    "Church Services",
    "Memorial Services",
    "Owambe Parties",
    "Tribute Nights",
    "Product Launches",
  ];

  return (
    <div className="relative m-auto flex gap-28 overflow-hidden border-y border-default-200 py-6 bg-primary/5">
      <div className="marquee__group flex min-w-full shrink-0 items-center justify-around gap-28">
        {services.map((service, idx) => (
          <div key={idx} className="py-2">
            <h2 className="text-4xl font-medium text-default-950">{service}</h2>
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="marquee__group flex min-w-full shrink-0 items-center justify-around gap-28"
      >
        {services.map((service, idx) => (
          <div key={`duplicate-${idx}`} className="py-2">
            <h2 className="text-4xl font-medium text-default-950">{service}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
