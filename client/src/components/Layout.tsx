import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Cpu, Gamepad2, Layers, GitPullRequest, BookOpen, BarChart3 } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Overview", icon: Layers },
    { href: "/iteration-cycles", label: "Iteration Cycles", icon: GitPullRequest },
    { href: "/project-management", label: "Prioritization", icon: BarChart3 },
    { href: "/documentation", label: "Documentation", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Bauhaus Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary flex items-center justify-center">
              <div className="h-4 w-4 bg-destructive rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Agile<span className="text-destructive">.</span>Product</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn(
                "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide flex items-center gap-2",
                location === item.href ? "text-primary font-bold border-b-2 border-destructive" : "text-muted-foreground"
              )}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r-4 border-primary">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className={cn(
                    "text-lg font-medium transition-colors hover:text-primary uppercase tracking-wide flex items-center gap-3 p-2 border-l-4 border-transparent hover:border-destructive hover:bg-muted",
                    location === item.href ? "text-primary font-bold border-destructive bg-muted" : "text-muted-foreground"
                  )}>
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t-4 border-primary py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for educational purposes. Focusing on <span className="font-bold text-primary">Design</span> & <span className="font-bold text-destructive">Product</span> workflows.
          </p>
        </div>
      </footer>
    </div>
  );
}
