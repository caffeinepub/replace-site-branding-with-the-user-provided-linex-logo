export default function BrandsBanner() {
  const brands = [
    { name: 'Siemens logo', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg' },
    { name: 'Schneider Electric logo', src: 'https://www.ruralelec.org/wp-content/uploads/2016/04/Schneider-Electric-logo-jpg-.png' },
  ];

  return (
    <section className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Brands We Deal In
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex h-20 w-40 items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
