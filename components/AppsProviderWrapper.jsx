"use client";
import { LayoutProvider } from "@/context";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const handleChangeTitle = () => {
  if (document.visibilityState == "hidden")
    document.title = "Please come back :-(";
  else document.title = "Rhythm & Sound";
};

const AppsProviderWrapper = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (document) {
      const e = document.querySelector("#__next_splash");
      if (e?.hasChildNodes()) {
        document.querySelector("#splash-screen")?.classList.add("remove");
      }
      e?.addEventListener("DOMNodeInserted", () => {
        document.querySelector("#splash-screen")?.classList.add("remove");
      });
    }

    import("preline/preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
    }, 400);
  }, [pathname]);

  return <LayoutProvider>{children}</LayoutProvider>;
};

export default AppsProviderWrapper;
