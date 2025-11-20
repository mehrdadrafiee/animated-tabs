"use client";

import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { StarIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  const [starsCount, setStarsCount] = React.useState(0);

  const fetchStarsCount = async () => {
    const res = await fetch("https://api.github.com/repos/mehrdadrafiee/animated-tabs");
    const data = await res.json();
    setStarsCount(data.stargazers_count || 0);
  };

  React.useEffect(() => {
    fetchStarsCount();
  }, []);

  return (
    <header className="flex justify-around p-4 items-center font-mono w-full">
      <Button variant="link" asChild>
        <a href="https://github.com/mehrdadrafiee">@mehrdadrafiee</a>
      </Button>
      <div className="flex items-center justify-end gap-2">
        <ThemeToggle />
        <Button variant="outline" asChild>
          <a href="https://github.com/mehrdadrafiee/animated-tabs" className="flex items-center">
            <GitHubLogoIcon />
            <StarIcon fill="currentColor" size={16} className="text-yellow-500 mr-1" />
            {starsCount}
            <ArrowUpRightIcon size={16} />
          </a>
        </Button>
      </div>
    </header>
  );
}
