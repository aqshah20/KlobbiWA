"use client";

import { MailIcon, PlusCircleIcon } from "lucide-react";
import { useLocation } from "react-router";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type React from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}) {
  const location = useLocation();

  const currentPath =
    location.pathname === "/" ? "/dashboard" : location.pathname;

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >
              <PlusCircleIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu>
          {items.map((item) => {
            const isActive =
              currentPath === item.url ||
              (item.url === "/" && currentPath === "/dashboard");
            return (
              <SidebarMenuItem key={item.title}>
                <Link to={item.url} className="w-full">
                  {/* ✅ Wrap with Link */}
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={
                      isActive
                        ? "bg-black text-white font-semibold hover:bg-black hover:text-white w-full"
                        : "w-full"
                    }
                  >
                    {item.icon && (
                      <item.icon
                        className={`size-6 ${
                          isActive ? "text-white" : "!text-black"
                        }`}
                      />
                    )}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
