"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button className="cursor-pointer" variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}