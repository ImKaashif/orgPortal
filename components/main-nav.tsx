"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavDetails } from "@/app/types";

const navList: NavDetails[] = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/seat",
    name: "Seat",
  },
  {
    link: "/meeting",
    name: "Meeting Room",
  },
  {
    link: "/attendance",
    name: "Attendance",
  },
  {
    link: "/tech-forum",
    name: "Blogs",
  },
  {
    link: "/hr-info",
    name: "HR Info",
  },
  {
    link: "",
    type: "dropdown",
    name: "External Links",
    dropdownItems: [
      {
        link: "/lin1",
        name: "Link1",
      },
      {
        link: "/link2",
        name: "Link2",
      },
    ],
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navList.map((navItem, index) =>
        navItem?.type == "dropdown" ? (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <span className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer">
                {navItem?.name}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              {navItem?.dropdownItems?.map((dropdownItem, index) => (
                <Link key={"d-down" + index} href={dropdownItem?.link}>
                  <DropdownMenuItem className="cursor-pointer">
                    {dropdownItem?.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={index}
            href={navItem?.link}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname?.includes(navItem?.link)
                ? "active"
                : "text-muted-foreground"
            }`}
          >
            {navItem?.name}
          </Link>
        )
      )}
    </nav>
  );
}
