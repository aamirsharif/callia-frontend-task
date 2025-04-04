const Logo = () => {
  return (
    <div className="absolute left-[44%] lg:left-32 2xl:left-48 top-6 md:top-8 lg:top-12">
      <img
        src="/logos/callia-logo.svg"
        alt="Callia Wedding Flower Logo" // More descriptive alt text
        className="w-16 sm:w-20 md:w-24"
        loading="lazy"
      />
    </div>
  );
}

export default Logo;