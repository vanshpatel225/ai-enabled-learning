import { Input } from "@/components/ui/input";
import { ThemeSelector } from "@/components/shared/theme-selector";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="w-full max-w-md">
          <Input placeholder="Search anything..." />
        </div>

        <div className="flex items-center gap-3">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}