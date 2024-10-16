import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./Toggle";
const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="text-foreground text-xl font-semibold transition-colors hover:text-foreground"
        >
          Todo
        </Link>
        <Link
          href="/all"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          All Todos
        </Link>
        <Link
          href="/add"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Add Todo
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Todo
            </Link>
            <Link href="/all" className="hover:text-foreground">
              All Todos
            </Link>
            <Link href="/add" className="hover:text-foreground">
              Add Todo
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="absolute right-3 md:right-5">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
