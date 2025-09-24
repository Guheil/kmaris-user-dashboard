"use client";

import { FC, useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";
import { DashboardProps } from "./interface";
import {
  DashboardRoot,
  MainContent,
    DashboardContainer,
} from "./elements";
import { 
  BarChart3, 
  FileText, 
  Home, 
  Clock, 
  CheckCircle, 
  XCircle,
    ClipboardList,
    FileSignature,
    History,
} from "lucide-react";

export const UserDashboard: FC<DashboardProps> = ({
  sidebarOpen,
  onSidebarToggle,
  isMobile = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for skeleton
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleLogout = () => {
    console.log("Logout triggered");
  };

  // Stats da

  return (
    <DashboardRoot>
        <Sidebar
        isOpen={sidebarOpen}
        onToggle={onSidebarToggle}
        navSections={[
            {
            title: "Overview",
            items: [
                {
                icon: <Home size={20} />,
                text: "Dashboard",
                href: "/user-dashboard",
                active: true,
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
                {
                icon: <Clock size={20} />,
                text: "Pending Requests",
                href: "/user-dashboard/pending",
                },
                {
                icon: <CheckCircle size={20} />,
                text: "Approved Requests",
                href: "/user-dashboard/approved",
                },
                {
                icon: <XCircle size={20} />,
                text: "Rejected Requests",
                href: "/user-dashboard/rejected",
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
                {
                icon: <FileSignature size={20} />,
                text: "Application Forms",
                href: "/user-dashboard/forms",
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
        ]}
        userName="John Doe"
        userRole="Client"
        userInitials="JD"
        logoSrc="/Logo.png"
        collapsible={true}
        navItems={[]}
        />


      <Header
        title="User Dashboard"
        onMenuToggle={onSidebarToggle}
        userName="John Doe"
        userRole="Client"
        userInitials="JD"
        isSidebarOpen={sidebarOpen}
        isMobile={isMobile}
        onSearch={handleSearch}
        notificationsList={[]}
        onNotificationClick={(notification) => console.log("Notification clicked:", notification)}
        onMarkAllAsRead={() => console.log("Mark all as read")}
        onLogout={handleLogout}
      />

      <MainContent sidebarOpen={sidebarOpen} isMobile={isMobile}>
        <DashboardContainer>
         
        </DashboardContainer>
      </MainContent>
    </DashboardRoot>
  );
};