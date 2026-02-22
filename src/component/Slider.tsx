import { useState } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/slider1.png",
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
    "/slider5.png",
    "/slider6.png",
  ];

  return (
    <div className="flex w-full h-screen sm:h-[70vh] md:h-[80vh] my-6 sm:my-8 md:my-10 gap-1 sm:gap-2 px-2 sm:px-3 md:px-4">
      {images.map((src, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          className="relative overflow-hidden rounded-2xl cursor-pointer"
          style={{
            flex: activeIndex === index
              ? "5 1 0%"
              : `${Math.max(0.4, 1.8 - Math.abs(activeIndex - index) * 0.4)} 1 0%`,
            transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;