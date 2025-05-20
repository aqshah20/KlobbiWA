"use client";

import * as React from "react";
import {
  BookText,
  CameraIcon,
  ChartNoAxesCombined,
  CreditCard,
  FileChartColumnIncreasing,
  FileCode,
  FileCodeIcon,
  FileSpreadsheet,
  FileTextIcon,
  Funnel,
  HelpCircleIcon,
  Inbox,
  LayoutDashboardIcon,
  ListIcon,
  Mail,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { WhatsAppIcon } from "@/icons/WhatsAppIcon";
import { WhatsappBWIcon } from "@/icons/WhatsappBWIcon";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Accounts",
      url: "/accounts",
      icon: ListIcon,
    },
    {
      title: "Send SMS",
      url: "/send-sms",
      icon: WhatsappBWIcon,
    },
    {
      title: "Custom SMS",
      url: "/custom-sms",
      icon: FileCode,
    },
    {
      title: "Groups",
      url: "/groups",
      icon: BookText,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
    },
    {
      title: "Sent Messages",
      url: "/sent-messages",
      icon: FileChartColumnIncreasing,
    },
    {
      title: "Sent Statistics",
      url: "/sent-statistics",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Invoices",
      url: "/invoices",
      icon: FileSpreadsheet,
    },
    {
      title: "Buy Now",
      url: "/pricing",
      icon: CreditCard,
    },
    {
      title: "Filter numbers",
      url: "/filter-numbers",
      icon: Funnel,
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: Mail,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  // documents: [
  //   {
  //     name: "Data Library",
  //     url: "#",
  //     icon: DatabaseIcon,
  //   },
  //   {
  //     name: "Reports",
  //     url: "#",
  //     icon: ClipboardListIcon,
  //   },
  //   {
  //     name: "Word Assistant",
  //     url: "#",
  //     icon: FileIcon,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <WhatsAppIcon className="!size-10" />
                <span className="text-base font-semibold">KlobbiWA</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
