"use client";

import { useScrollEvent } from "@/hooks";
import { LuChevronUp, LuMoon, LuSun } from "react-icons/lu";

const BackToTop = () => {
  const { scrollY } = useScrollEvent();

  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[inset_0px_0px_12px_0px] shadow-primary/40 backdrop-blur-3xl transition-all duration-500 ${
          scrollY < 72 && "translate-x-16"
        }`}
      >
        <LuChevronUp className="h-4 w-4" />
      </button>
    </div>
  );
};

export default BackToTop;
