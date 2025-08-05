import React from 'react';

const Watermark = () => {
  return (
    <div
      className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none print:hidden"
      aria-hidden="true"
    >
      <span className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground/5 rotate-[-30deg] select-none">
        SMKN 9 Pontianak
      </span>
    </div>
  );
};

export default Watermark;