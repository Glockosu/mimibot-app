"use client"

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "light" ? (
        <FontAwesomeIcon icon={faSun} className="w-4 h-4" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="w-4 h-4" />
      )}
    </button>
  );
}
