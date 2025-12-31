const DottedFooter = () => {
  return (
    <footer className="relative w-full py-10 md:py-19 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1c1b1b 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 via-transparent pointer-events-none" />
      <div className="md:px-20 text-center md:text-left relative z-10">
        <h2 className="font-bold text-sm md:text-base tracking-wider">
          ENHANCING EXPERIENCE
        </h2>
        <p className="text-xs md:text-sm mt-1">BY MARWANE TRAIKI____</p>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6"></div>
    </footer>
  );
};

export default DottedFooter;
