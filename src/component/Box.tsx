import React from "react";

interface BoxProps {
  text: string;
  bgColor?: string;
  visible?: boolean;
  icon?: React.ReactNode | string;
  animation?: boolean;
}

const Box = ({ text, bgColor, icon, visible , animation = false }: BoxProps) => {
  return (
    <div className="border border-[#362baa] w-fit h-8 rounded-sm overflow-hidden z-10">
      <div
        className="px-3 max-[650px]:px-1 w-full h-full flex items-center justify-center text-white text-sm max-[450px]-text-xs"
        style={{
          backgroundColor: bgColor,
          ...(animation ? {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0%)" : "translateY(100%)",
            transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
          } : {
            opacity: 1,
            transform: "translateY(0%)",
          })
        }}
      >
        {text}
        {icon && (
          <span
            className="ml-2"
            dangerouslySetInnerHTML={{ __html: icon as string }}
          />
        )}
      </div>
    </div>
  );
};

export default Box;
