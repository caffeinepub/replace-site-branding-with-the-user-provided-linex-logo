const certificationLogos = [
  {
    name: "IAF Accreditation",
    src: "https://lh3.googleusercontent.com/d/1dx2ImIuPXmfwwh1KySQWXbies2cTNBzS",
  },
  {
    name: "ISO 9001:2015 Certified",
    src: "https://lh3.googleusercontent.com/d/1Qg9r2LGGKsESqGnr0YwomOLYEmeOz33J",
  },
];

export default function OurCertificationsBanner() {
  return (
    <section className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Our Certifications
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {certificationLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 w-auto max-w-[90px] object-contain"
                style={{ mixBlendMode: "multiply" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
