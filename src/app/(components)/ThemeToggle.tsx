"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { toggleDarkMode } from "../../state/globalSlice";
import { useEffect } from "react";

export default function ThemeToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const isDarkMode = useSelector((state: RootState) => state.global.isDarkMode);

  // Apply/remove the "dark" class on <html> whenever Redux state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="px-4 py-2 bg-purple-600 text-white rounded-md"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Current theme: <strong>{isDarkMode ? "Dark" : "Light"}</strong>
      </p>
    </div>
  );
}
