"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export function ThemeSelector() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
     useEffect(() => {
    setMounted(true);
    }, []);
  
    if (!mounted) {
    return (
      <Button variant="outline">
        Loading...
      </Button>
    );
    }
    const themeConfig = {
    light: {
      label: "Light",
      icon: Sun,
    },
    dark: {
      label: "Dark",
      icon: Moon,
    },
    system: {
      label: "System",
      icon: Monitor,
    },
};

const currentTheme =
  themeConfig[
    (theme as "light" | "dark" | "system") || "system"
  ];

const CurrentIcon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[140px] justify-between"
        >
          <div className="flex items-center gap-2">
            <CurrentIcon className="h-4 w-4" />
            <span>{currentTheme.label}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}