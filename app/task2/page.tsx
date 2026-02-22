"use client";
import Box from "@/component/Box";
import ConnectionAnimation from "@/component/ConnectionAnimation";
import { FlipBox } from "@/component/FlipBox";
import { useEffect, useState } from "react";

const page = () => {
  const FLIP_ORDER = [2, 0, 4, 1, 5, 3];
  const REVEAL_ORDER = [2, 4, 0, 3, 1];
const STEP_DELAY = 500;
const PAUSE_AFTER = 3000;
  const icons = [
    // Word
    <svg
      key="word"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" fill="#fff" rx="4" />
      <path d="M22.49 8h-4.98v24.6h4.98V8Z" fill="#2E73B8" />
      <path d="m17.51 8-3.42 1.86v20.94l3.42 1.8V8Z" fill="#215C99" />
      <path d="M22.49 8v24.6l3.42-1.8V9.86L22.49 8Z" fill="#5294CF" />
      <path d="m29.33 11.42 1.92 1.02v15.72l-1.92 1.02V11.42Z" fill="#5294CF" />
      <path d="m29.33 29.18-3.42-1.02V12.44l3.42-1.02v17.76Z" fill="#215C99" />
      <path d="m8.75 12.44v15.72l1.92 1.02V11.42L8.75 12.44Z" fill="#215C99" />
      <path d="m10.67 11.42 3.42 1.02v15.72l-3.42 1.02V11.42Z" fill="#5294CF" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="developer-systems-logo__svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#29B5E8" rx="4"></rect>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M16.015 20.439a1.48 1.48 0 0 0 .014-.838c-.101-.364-.34-.69-.697-.895l-5.085-2.922a1.5 1.5 0 0 0-2.044.547 1.481 1.481 0 0 0 .547 2.034l2.84 1.636-2.84 1.63a1.486 1.486 0 0 0-.547 2.039 1.5 1.5 0 0 0 2.044.543l5.085-2.924c.343-.196.576-.504.683-.85Zm1.38 2.738a1.479 1.479 0 0 0-.87.195l-5.087 2.92a1.492 1.492 0 1 0 1.496 2.583l2.851-1.637v3.27c0 .824.67 1.492 1.499 1.492.825 0 1.496-.668 1.496-1.492v-5.846c0-.785-.61-1.43-1.385-1.485Zm5.21-6.354c.292.024.595-.038.868-.195l5.087-2.923a1.49 1.49 0 0 0 .548-2.038 1.5 1.5 0 0 0-2.044-.545l-2.848 1.639V9.49c0-.822-.67-1.49-1.499-1.49-.829 0-1.497.668-1.497 1.49v5.846c0 .784.61 1.43 1.386 1.487Zm-11.168-3.118 5.089 2.923a1.5 1.5 0 0 0 .869.195 1.495 1.495 0 0 0 1.385-1.487V9.49c0-.822-.671-1.49-1.496-1.49-.83 0-1.499.668-1.499 1.49v3.271l-2.85-1.639a1.5 1.5 0 0 0-2.045.545 1.49 1.49 0 0 0 .547 2.038ZM21 19.99a.445.445 0 0 0-.112-.267l-.613-.606a.433.433 0 0 0-.264-.11h-.024a.429.429 0 0 0-.264.11l-.612.607a.434.434 0 0 0-.108.266v.023c0 .084.047.202.108.263l.612.608c.06.06.179.11.264.11h.024c.085 0 .204-.05.264-.11l.613-.608a.433.433 0 0 0 .112-.263v-.023Zm1.69.583-2.115 2.102a.423.423 0 0 1-.265.113h-.622a.431.431 0 0 1-.266-.113l-2.113-2.102a.424.424 0 0 1-.11-.262v-.62a.43.43 0 0 1 .11-.265l2.113-2.102a.428.428 0 0 1 .266-.11h.622c.086 0 .205.048.265.11l2.115 2.102c.06.06.11.18.11.265v.62a.424.424 0 0 1-.11.262Zm5.87 5.72-5.087-2.92a1.475 1.475 0 0 0-.867-.195 1.49 1.49 0 0 0-1.386 1.485v5.846c0 .824.668 1.492 1.497 1.492.829 0 1.499-.668 1.499-1.492v-3.27l2.848 1.637a1.492 1.492 0 1 0 1.496-2.583Zm2.69-7.927-2.841 1.636 2.841 1.63c.718.414.963 1.324.548 2.039a1.502 1.502 0 0 1-2.045.543l-5.088-2.924a1.479 1.479 0 0 1-.68-.85 1.456 1.456 0 0 1-.014-.838c.102-.364.34-.69.694-.895l5.088-2.922a1.501 1.501 0 0 1 2.045.547c.415.712.17 1.622-.548 2.034Z"
        clip-rule="evenodd"
      ></path>
    </svg>,
    // PowerPoint
    <svg
      key="ppt"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" fill="#fff" rx="4" />
      <path d="M22.49 8h-4.98v24.6h4.98V8Z" fill="#C43E1C" />
      <path d="m17.51 8-3.42 1.86v20.94l3.42 1.8V8Z" fill="#A33016" />
      <path d="M22.49 8v24.6l3.42-1.8V9.86L22.49 8Z" fill="#D96035" />
      <path d="m29.33 11.42 1.92 1.02v15.72l-1.92 1.02V11.42Z" fill="#D96035" />
      <path d="m29.33 29.18-3.42-1.02V12.44l3.42-1.02v17.76Z" fill="#A33016" />
      <path d="m8.75 12.44v15.72l1.92 1.02V11.42L8.75 12.44Z" fill="#A33016" />
      <path d="m10.67 11.42 3.42 1.02v15.72l-3.42 1.02V11.42Z" fill="#D96035" />
    </svg>,
  ];

  const topname = [
    "ERP",
    "CRM",
    "Subscriptions",
    "Legacy billing",
    "Booking system",
  ];

  const png = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className="developer-systems-logo__svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#50FAAB" rx="4"></rect>
      <path fill="#fff" d="m16 8-6 6h6v6l-6 6h6v6l6-6h-6v-6l6-6h-6V8Z"></path>
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M22 26a9 9 0 1 0 0-18h-6v6h-6v6h6v6h-6v6h6v-6h6Zm0-6v-6h-6v6h6Z"
        clip-rule="evenodd"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="developer-systems-logo__svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#fff" rx="4"></rect>
      <path
        fill="#B1C2D2"
        d="M23.888 9.704h6.98l.049 15.546H26.2V14.037h-2.313V9.704Z"
      ></path>
      <path
        fill="#014372"
        d="M22.925 21.379V8.5H8v5.493h8.97l5.955 7.386Z"
      ></path>
      <path
        fill="#B1C2D2"
        d="M16.112 30.425h-6.98l-.049-15.546H13.8v11.213h2.312v4.333Z"
      ></path>
      <path
        fill="#014372"
        d="M17.075 18.75v12.879H32v-5.494h-8.97l-5.955-7.385Z"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#50FAAB" rx="4" />
      <path fill="#fff" d="m16 8-6 6h6v6l-6 6h6v6l6-6h-6v-6l6-6h-6V8Z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M22 26a9 9 0 1 0 0-18h-6v6h-6v6h6v6h-6v6h6v-6h6Zm0-6v-6h-6v6h6Z"
        clipRule="evenodd"
      />
    </svg>,
    // 2 - Blue arrow logo
    // 4 - Excel
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#fff" rx="4" />
      <path d="M22.49 8h-4.98v24.6h4.98V8Z" fill="#1E7145" />
      <path d="m17.51 8-3.42 1.86v20.94l3.42 1.8V8Z" fill="#185C37" />
      <path d="M22.49 8v24.6l3.42-1.8V9.86L22.49 8Z" fill="#33A96A" />
      <path d="m29.33 11.42 1.92 1.02v15.72l-1.92 1.02V11.42Z" fill="#33A96A" />
      <path d="m29.33 29.18-3.42-1.02V12.44l3.42-1.02v17.76Z" fill="#185C37" />
      <path d="m8.75 12.44v15.72l1.92 1.02V11.42L8.75 12.44Z" fill="#185C37" />
      <path d="m10.67 11.42 3.42 1.02v15.72l-3.42 1.02V11.42Z" fill="#33A96A" />
    </svg>,
    // 5 - PowerPoint
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#fff" rx="4" />
      <path d="M22.49 8h-4.98v24.6h4.98V8Z" fill="#C43E1C" />
      <path d="m17.51 8-3.42 1.86v20.94l3.42 1.8V8Z" fill="#A33016" />
      <path d="M22.49 8v24.6l3.42-1.8V9.86L22.49 8Z" fill="#D96035" />
      <path d="m29.33 11.42 1.92 1.02v15.72l-1.92 1.02V11.42Z" fill="#D96035" />
      <path d="m29.33 29.18-3.42-1.02V12.44l3.42-1.02v17.76Z" fill="#A33016" />
      <path d="m8.75 12.44v15.72l1.92 1.02V11.42L8.75 12.44Z" fill="#A33016" />
      <path d="m10.67 11.42 3.42 1.02v15.72l-3.42 1.02V11.42Z" fill="#D96035" />
    </svg>,
    // 6 - Purple/OneNote style
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#fff" rx="4" />
      <path d="M22.49 8h-4.98v24.6h4.98V8Z" fill="#7719AA" />
      <path d="m17.51 8-3.42 1.86v20.94l3.42 1.8V8Z" fill="#5C1283" />
      <path d="M22.49 8v24.6l3.42-1.8V9.86L22.49 8Z" fill="#9B3DC8" />
      <path d="m29.33 11.42 1.92 1.02v15.72l-1.92 1.02V11.42Z" fill="#9B3DC8" />
      <path d="m29.33 29.18-3.42-1.02V12.44l3.42-1.02v17.76Z" fill="#5C1283" />
      <path d="m8.75 12.44v15.72l1.92 1.02V11.42L8.75 12.44Z" fill="#5C1283" />
      <path d="m10.67 11.42 3.42 1.02v15.72l-3.42 1.02V11.42Z" fill="#9B3DC8" />
    </svg>,
  ];
  const [flipIndices, setFlipIndices] = useState([0, 0, 0, 0, 0, 0]);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setFlipIndices((prev) => prev.map((idx) => (idx + 1) % 6));
        setIsFlipping(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

   const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, delay: number) => timers.push(setTimeout(fn, delay));

    const runCycle = () => {
      REVEAL_ORDER.forEach((boxIndex, step) => {
        t(() => {
          setVisibleSet((prev) => new Set([...prev, boxIndex]));
        }, (step + 1) * STEP_DELAY);
      });

      const allShownAt = (REVEAL_ORDER.length + 1) * STEP_DELAY;

      REVEAL_ORDER.forEach((boxIndex, step) => {
        t(() => {
          setVisibleSet((prev) => {
            const next = new Set(prev);
            next.delete(boxIndex);
            return next;
          });
        }, allShownAt + PAUSE_AFTER + (step + 1) * STEP_DELAY);
      });

      const allHiddenAt = allShownAt + PAUSE_AFTER + (REVEAL_ORDER.length + 1) * STEP_DELAY;
      t(runCycle, allHiddenAt + 500);
    };

    runCycle();

    return () => timers.forEach(clearTimeout);
  }, []);

  
  return (
    <div
      className="w-full h-[90vh] flex justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0D1738" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg width='10' height='10' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='2' height='2' fill='%2330437F'/></svg>\")",
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0",
          opacity: 0.4,
        }}
      />
      <div className="hidden min-[950px]:flex items-center w-38 h-96.5 mt-10">
        <div className="w-38 h-26.25 z-10 bg-[#122054] rounded-md gap-2 p-2 grid grid-cols-3 grid-rows-2 overflow-hidden">
          {png.map((_, index) => (
            <FlipBox
              key={index}
              boxIndex={FLIP_ORDER.indexOf(index)}
              pngList={png}
              startIndex={index * 2}
            />
          ))}
        </div>
      </div>
      <div className="flex w-150 flex-col items-center  pt-10 relative wrap-break-word">
        <div className=" rounded-lg h-12  bg-[#122054] p-2 flex gap-2.5 relative items-center justify-center">
          {topname.map((item, index) => (
            <Box key={index} animation={true} text={item} bgColor="#2C2484" visible={visibleSet.has(index)}
 />
          ))}
        </div>
        <svg
          className="items-center"
          width="313"
          height="215"
          aria-hidden="true"
          viewBox="0 0 313 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0V96.976C1 101.395 4.582 104.976 9 104.976H118.527H148.372C152.79 104.976 156.372 108.558 156.372 112.976V214.258"
            stroke="#5D64FE"
            stroke-dasharray="2 2"
          ></path>
          <path
            d="M311.671 0V96.976C311.671 101.395 308.09 104.976 303.671 104.976H194.144H164.3C159.882 104.976 156.3 108.558 156.3 112.976V114.258"
            stroke="#5D64FE"
            stroke-dasharray="2 2"
          ></path>
        </svg>

        <div className="absolute left-0 top-[20%] w-full flex items-center justify-between">
          <div className="w-[50%] max-[500px]:w-[30%] flex justify-center mr-3">
            <Box text="SDK" bgColor="#533AFD" />
          </div>
          <div className="w-[50%] max-[500px]:w-[40%] flex justify-center">
            <Box text="Event Destinations" bgColor="#533AFD" />
          </div>
        </div>

        <div
          className="absolute w-[80] h-[80] flex font-extrabold items-center justify-center rounded-lg text-white text-sm left-[50%] top-[33%] translate-x-[-50%] translate-y-[-50%] z-10"
          style={{
            background:
              "linear-gradient(288.31deg,#0d1738 -6.87%,#4032c8 105.95%)",
          }}
        >
          <p>stripe</p>
        </div>

        <div className="w-full absolute top-[34%] z-1">
          <div className="">
            <svg
              className="items-center stripe-row"
              width="740"
              height="20"
              aria-hidden="true"
              viewBox="0 0 740 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="10"
                x2="740"
                y2="10"
                stroke="#5D64FE"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
          <div className="flex min-[950px]:hidden items-center w-38 -mt-10">
        <div className="z-10 bg-[#122054] rounded-md gap-2 p-2 grid grid-cols-3 grid-rows-2 overflow-hidden">
          {png.map((_, index) => (
            <FlipBox
              key={index}
              boxIndex={FLIP_ORDER.indexOf(index)}
              pngList={png}
              startIndex={index * 2}
            />
          ))}
        </div>
      </div>
          <div className="absolute -top-2 left-10 hidden min-[950px]:block">
            <Box
              text="App Marketplace"
              bgColor="#533AFD"
              icon='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" rtrvr-ls="5~hs,6~hs,8~hs,9~hs"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5c0 1.24-1 2.25-2.25 2.25h-6C1.01 12 0 11 0 9.75v-6C0 2.51 1 1.5 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z" fill="#F2F7FE" rtrvr-ls="5~hs,6~hs,8~hs,9~hs"></path><path d="M7 0a.75.75 0 1 0 0 1.5h2.44L3.72 7.22a.75.75 0 0 0 1.06 1.06l5.72-5.72V5A.75.75 0 0 0 12 5V.75a.75.75 0 0 0-.75-.75H7Z" fill="#F2F7FE"></path></svg>'
            />
          </div>
          <div className="absolute -top-2 right-10">
            <Box
              text="Data Pipeline
"
              bgColor="#533AFD"
            />
          </div>
        </div>

        <div>
          <Box text="Orchestration" bgColor="#533AFD" />
        </div>
        <ConnectionAnimation/>
      </div>
      <div className="hidden min-[950px]:flex items-center w-38 h-96.5 mt-10 justify-end">
        <div className="w-10 h-10 z-10 rounded-md">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 4,
              transform: isFlipping ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 0.3s ease-in-out",
              transformOrigin: "center",
            }}
          >
            {icons[flipIndices[0] % icons.length]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
