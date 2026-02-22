import { useState, useEffect } from "react";

const BOX_COUNT = 6;
const FLIP_MS = 500;
const INTERVAL_PER_BOX = 1000;

interface FlipBoxProps {
  boxIndex: number;
  pngList: React.ReactNode[];
  startIndex: number;
}

export function FlipBox({ boxIndex, pngList, startIndex }: FlipBoxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex % pngList.length);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const totalCycle = BOX_COUNT * INTERVAL_PER_BOX;

    const tick = () => {
      setFlipping(true);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % pngList.length);
        setFlipping(false);
      }, FLIP_MS);
    };

    const initialDelay = boxIndex * INTERVAL_PER_BOX;

    const timeout = setTimeout(() => {
      tick();
      const interval = setInterval(tick, totalCycle);
      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [boxIndex, pngList.length]);

  return (
    <div className="border border-[#362baa] w-10 h-10 max-[600px]:w-7 max-[600px]:h-7 rounded-md overflow-hidden flex items-center justify-center flip-box">
      <div
        style={{
          borderRadius: 4,
          transform: flipping ? "scaleY(0)" : "scaleY(1)",
          transition: `transform ${FLIP_MS}ms ease-in-out`,
          transformOrigin: "center",
        }}  
        className="flexBox-img w-full h-full flex items-center justify-center"
      >
        {pngList[currentIndex]}
      </div>
    </div>
  );
}
