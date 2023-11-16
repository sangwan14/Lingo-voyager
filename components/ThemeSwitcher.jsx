"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@material-tailwind/react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="text"
    >
      <span class="material-symbols-outlined text-4xl dark:text-white">dark_mode</span>
    </IconButton>
  );
};
