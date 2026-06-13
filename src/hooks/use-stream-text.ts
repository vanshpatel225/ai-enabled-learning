import { useEffect, useState } from "react";

export function useStreamText(text: string, speed = 15) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayed("");

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}