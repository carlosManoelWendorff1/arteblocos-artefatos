"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { WhatsApp } from "./whatsapp";

const menu = [
  { id: "Início", index: 0, name: "Home" },
  { id: "Cobogós", index: 1, name: "Expertise" },
  { id: "Revestimentos", index: 2, name: "Work" },
  { id: "Galeria", index: 3, name: "Experience" },
];

export default function Header() {
  const active = useScrollSpy(menu.map((m) => m.id));

  function handleScroll(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Símbolo */}
          <img
            src="/logo-b.png"
            alt="Logo símbolo"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain"
          />

          {/* Texto do logo */}
          <img
            src="/logo.png"
            alt="Logo texto"
            className="
      hidden sm:block
      h-6 sm:h-8 md:h-10 lg:h-12
      w-auto
      object-contain
    "
          />
        </div>

        {/* Desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {menu.map((item) => {
              const isActive = active === item.id;

              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => handleScroll(item.id)}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer bg-transparent",
                      isActive &&
                        "text-primary data-[active]:text-primary font-logo font-medium",
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu */}
        <div className="flex items-center gap-2">
          <WhatsApp />
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              {menu.map((item, i) => {
                const isActive = active === item.id;

                return (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className={cn(
                      "flex items-center gap-3 cursor-pointer",
                      isActive && "text-primary font-medium",
                    )}
                  >
                    <span className="text-xs text-muted-foreground font-logo">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.name}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
