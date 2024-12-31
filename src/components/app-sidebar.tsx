"use client";

import { Home, Book } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "main",
    items: [
      { title: "Home", icon: Home, url: "/" },
      { title: "Button", icon: Book, url: "/button" },
    ],
  },
  //   {
  //     title: "Support",
  //     items: [
  //       { title: "Settings", icon: Settings, url: "/settings" },
  //       { title: "Help", icon: HelpCircle, url: "/help" },
  //     ],
  //   },
];

export function AppSidebar() {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar
      variant={isMobile ? "floating" : "sidebar"}
      collapsible={isMobile ? "offcanvas" : "icon"}
    >
      <SidebarContent>
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-lg font-semibold">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
