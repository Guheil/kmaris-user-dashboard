// src/data/navItems.ts
import { Home, ClipboardList, BarChart3, History, FileText } from "lucide-react";

export const navSections = [
  {
    title: "Overview",
    items: [
      {
        icon: <Home size={20} />,
        text: "Dashboard",
        href: "/user-dashboard",
      },
    ],
  },
  {
    title: "My Applications",
    items: [
      {
        icon: <ClipboardList size={20} />,
        text: "All Requests",
        href: "/user-dashboard/requests",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        icon: <FileText size={20} />,
        text: "Available Services",
        href: "/user-dashboard/services",
      },
    ],
  },
  {
    title: "Reports & History",
    items: [
      {
        icon: <BarChart3 size={20} />,
        text: "My Reports",
        href: "/user-dashboard/reports",
      },
      {
        icon: <History size={20} />,
        text: "Activity History",
        href: "/user-dashboard/history",
      },
    ],
  },
];