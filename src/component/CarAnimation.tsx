"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const frames = [
  "/car1.png",
  "/car2.png",
  "/car3.png",
  "/car4.png",
];

export default function CarAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  // Wheel animation (fast rotation)
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 400); // ← faster = more realistic wheel spin (80–150ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="road-container mt-4">
      <div className="car-wrapper">
        <div className="car">
          <Image
            src={frames[frameIndex]}
            alt="moving car"
            width={300}
            height={160}
            priority
            className="car-sprite"
          />
        </div>
      </div>
    </div>
  );
}