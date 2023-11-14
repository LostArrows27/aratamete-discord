import { useEffect, useState } from "react";

export const useOrigin = () => {
  // this technique is to set the origin only on the client side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mounted) {
    return "";
  }

  return origin;
};
