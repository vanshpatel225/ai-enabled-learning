"use client";

import Link from "next/link";
import { Brain, BookOpen, Search, Settings } from "lucide-react";

const items = [
  {
    label: "AI Workspace",
    href: "/workspace",
    icon: Brain,
  },
  {
    label: "Learning",
    href: "/learning",
    icon: BookOpen,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-background lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-semibold">
          NeuralOS
        </span>
      </div>

      <nav className="space-y-1 p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-muted"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
