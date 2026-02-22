"use client";
import { useEffect, useState } from "react";

export default function ConnectionAnimation() {
  const [phase, setPhase] = useState(0);
  const [divPhase, setDivPhase] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, delay: number) => timers.push(setTimeout(fn, delay));

    const runCycle = () => {
      t(() => setPhase(1),     500);
      t(() => setDivPhase(1), 1200);

      t(() => setPhase(2),    2500);
      t(() => setDivPhase(2), 3100);

      t(() => setPhase(3),    4000);
      t(() => setDivPhase(3), 4600);

      t(() => { setPhase(0); setDivPhase(0); }, 7000);

      t(runCycle, 10000);
    };

    runCycle();

    return () => timers.forEach(clearTimeout);
  }, []);

  const animPath = (visible: boolean) => ({
    strokeDasharray: 120,
    strokeDashoffset: visible ? 0 : 120,
    transition: visible
      ? "stroke-dashoffset 1.8s ease"
      : "stroke-dashoffset 0.5s ease",
  });

  const animDiv = (visible: boolean) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(-10px)",
    transition: visible
      ? "opacity 0.8s ease-in, transform 0.8s ease-in"
      : "opacity 0.3s ease, transform 0.3s ease",
  });

  return (
    <div className="flex flex-col items-center">
      <div>
        <svg
          width="191"
          height="102"
          viewBox="0 0 191 102"
          aria-hidden="true"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.0576 0.342323C81.0576 13.3582 81.0576 11.8288 81.0576 18.4909C81.0576 22.9092 77.4759 26.4913 73.0577 26.4913L28.511 26.4915C24.0927 26.4916 20.511 30.0733 20.511 34.4915L20.511 59.9819"
            stroke="#152460"
            strokeDasharray="2 2"
          />
          <path
            d="M90.5 -4.19617e-05L90.5 41.1113C90.5 45.5393 86.9031 49.125 82.4751 49.1113L78.5874 49.0992C74.1594 49.0854 70.5625 52.6712 70.5625 57.0992L70.5625 59.938"
            stroke="#152460"
            strokeDasharray="2 2"
          />
          <path
            d="M100.5 -4.19617e-05L100.5 41.1113C100.5 45.5393 104.097 49.125 108.525 49.1113L112.413 49.0992C116.841 49.0854 120.437 52.6712 120.437 57.0992L120.437 59.938"
            stroke="#152460"
            strokeDasharray="2 2"
          />
          <path
            d="M109.942 0.342323C109.942 13.3582 109.942 11.8288 109.942 18.4909C109.942 22.9092 113.524 26.4913 117.942 26.4913L162.489 26.4915C166.907 26.4916 170.489 30.0733 170.489 34.4915L170.489 59.9819"
            stroke="#152460"
            strokeDasharray="2 2"
          />
          <path
            d="M90.5 -4.19617e-05L90.5 41.1113C90.5 45.5393 86.9031 49.125 82.4751 49.1113L78.5874 49.0992C74.1594 49.0854 70.5625 52.6712 70.5625 57.0992L70.5625 59.938"
            stroke="#5D64FE"
            style={animPath(phase >= 1)}
          />
          <path
            d="M100.5 -4.19617e-05L100.5 41.1113C100.5 45.5393 104.097 49.125 108.525 49.1113L112.413 49.0992C116.841 49.0854 120.437 52.6712 120.437 57.0992L120.437 59.938"
            stroke="#5D64FE"
            style={animPath(phase >= 1)}
          />
          <path
            d="M81.0576 0.342323C81.0576 13.3582 81.0576 11.8288 81.0576 18.4909C81.0576 22.9092 77.4759 26.4913 73.0577 26.4913L28.511 26.4915C24.0927 26.4916 20.511 30.0733 20.511 34.4915L20.511 59.9819"
            stroke="#5D64FE"
            style={animPath(phase >= 2)}
          />
          <path
            d="M109.942 0.342323C109.942 13.3582 109.942 11.8288 109.942 18.4909C109.942 22.9092 113.524 26.4913 117.942 26.4913L162.489 26.4915C166.907 26.4916 170.489 30.0733 170.489 34.4915L170.489 59.9819"
            stroke="#5D64FE"
            style={animPath(phase >= 3)}
          />
        </svg>
      </div>

      <div className="flex gap-2 -mt-10">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="border border-dashed border-[#362baa] w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center"
          >
            <p
              style={animDiv(
                index === 1 || index === 2
                  ? divPhase >= 1
                  : index === 0
                  ? divPhase >= 2
                  : divPhase >= 3
              )}
              className="text-sm font-bold bg-[#2C2484] w-full h-full flex items-center justify-center"
            >
              PSP
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}