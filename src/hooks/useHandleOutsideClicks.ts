import type React from "react";
import { useEffect } from "react";

export function useHandleOutsideClicks(
  ref: React.MutableRefObject<HTMLElement | HTMLDivElement | null>,
  close: () => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (ref.current) {
        if (ref.current === event.target) {
          close();
        }
      }
    };
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref]);
}
