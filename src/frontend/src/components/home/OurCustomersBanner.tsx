const customers = [
  {
    name: "Customer 1",
    src: "https://lh3.googleusercontent.com/d/16vhfkZme73rJLRgEvInTkvpLMhAg4s2S",
  },
  {
    name: "Customer 2",
    src: "https://lh3.googleusercontent.com/d/1F8esz_FifVWZmyD7kKOjMby54haxQKWM",
  },
  {
    name: "Customer 3",
    src: "https://lh3.googleusercontent.com/d/1JliZR99EzyV0xsL5XIatVnmIiZEGb8N9",
  },
  {
    name: "Customer 4",
    src: "https://lh3.googleusercontent.com/d/15SNprAdI6HQbSFtKQ8mqIjkXwPgTSXdA",
  },
  {
    name: "Customer 5",
    src: "https://lh3.googleusercontent.com/d/1BeEMFpb3Q7sF1ONjHQrN4DRiVb4V07UI",
  },
  {
    name: "Customer 6",
    src: "https://lh3.googleusercontent.com/d/1bSfhKCnEYBh3ciqQrJZiWuUXddRjLdhq",
  },
  {
    name: "Customer 7",
    src: "https://lh3.googleusercontent.com/d/17CSNqO02S_ZRLy91-EutaaBD4C4RuJLi",
  },
  {
    name: "Customer 8",
    src: "https://lh3.googleusercontent.com/d/1afKfaqAkCFufThp2S7E_oVG3Fwmtqph3",
  },
  {
    name: "Customer 9",
    src: "https://lh3.googleusercontent.com/d/1SVXPPRE_jiTszQBuHxfmLWHi0_6qZx_F",
  },
];

export default function OurCustomersBanner() {
  return (
    <section className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Our Customers
        </h2>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex items-center gap-16">
          {/* First set */}
          {customers.map((customer) => (
            <div
              key={`first-${customer.name}`}
              className="marquee-item flex-shrink-0"
            >
              <img
                src={customer.src}
                alt={customer.name}
                className="h-16 w-40 object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {customers.map((customer) => (
            <div
              key={`second-${customer.name}`}
              className="marquee-item flex-shrink-0"
            >
              <img
                src={customer.src}
                alt={customer.name}
                className="h-16 w-40 object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
