import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "../components/theme.provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Determine icon color based on theme
  const iconColor = theme === "dark" ? "#a78bfa" : "#7c3aed"; // purple accent for dark/light

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          size="icon"
          className="relative border-violet-400 text-violet-700 hover:bg-violet-100 transition"
        >
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
              theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
            }`}
            color={theme === "light" ? iconColor : undefined}
          />
          <Moon
            className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
              theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
            }`}
            color={theme === "dark" ? iconColor : undefined}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-violet-900 border border-violet-200 dark:border-violet-700 rounded-md shadow-md"
      >
        <DropdownMenuItem
          className="text-violet-900 dark:text-violet-200 hover:bg-violet-100 dark:hover:bg-violet-700 transition"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-violet-900 dark:text-violet-200 hover:bg-violet-100 dark:hover:bg-violet-700 transition"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-violet-900 dark:text-violet-200 hover:bg-violet-100 dark:hover:bg-violet-700 transition"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
