import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("mode");
      console.log(item);
      const setDark = () => {
        setMode("dark");
        window.document.body.classList.add("dark");
      };
      const localMode = window.localStorage.getItem("mode");
      localMode ? (localMode === "light" ? setMode("light") : setDark()) : "";
    }
  }, []);

  const changeMode = () => {
    setMode(() => (mode === "light" ? "dark" : "light"));
    const item = window.localStorage.getItem("mode");
    localStorage.setItem("mode", item === "light" ? "dark" : "light");
    window.document.body.classList.toggle("dark");
  };

  return {
    changeMode,
    mode,
  };
}
