import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 bg-gradient-lightsaber opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </Button>
  );
}