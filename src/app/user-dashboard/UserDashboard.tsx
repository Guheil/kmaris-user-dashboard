"use client";

import { FC, useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";
import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection";
import { StatsSection } from "@/components/StatsSection/StatsSection";
import { QuickActionsSection } from "@/components/QuickActionsSection/QuickActionsSection";
import { RecentApplicationsSection } from "@/components/RecentApplicationsSection/RecentApplicationsSection";
import { ImmigrationServicesSection } from "@/components/ImmigrationServicesSection/ImmigrationServicesSection";
import { UpdatesSection } from "@/components/UpdatesSection/UpdatesSection";
import { DashboardProps, DashboardStats, QuickAction, Application } from "./interface";
import { DashboardRoot, MainContent, DashboardContainer } from "./elements";
import { Home, ClipboardList, Clock, CheckCircle, XCircle, FileText, FileSignature, BarChart3, History, PlusCircle, Calendar, Download, MessageCircle } from "lucide-react";

export const UserDashboard: FC<DashboardProps> = ({
  sidebarOpen,
  onSidebarToggle,
  isMobile = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleLogout = () => {
    console.log("Logout triggered");
  };

  const dashboardStats: DashboardStats = {
    totalApplications: 12,
    pendingApplications: 3,
    approvedApplications: 7,
    rejectedApplications: 2,
    totalApplicationsChange: 2,
    pendingApplicationsChange: -1,
    approvedApplicationsChange: 3,
    rejectedApplicationsChange: 0,
  };

  const quickActions: QuickAction[] = [
    {
      id: "new-application",
      title: "New Application",
      description: "Start a new service request",
      icon: <PlusCircle size={20} />,
      href: "/user-dashboard/new-application",
    },
    {
      id: "schedule-appointment",
      title: "Schedule Appointment",
      description: "Book a consultation",
      icon: <Calendar size={20} />,
      href: "/user-dashboard/appointments",
    },
    {
      id: "download-documents",
      title: "Download Documents",
      description: "Access your completed forms",
      icon: <Download size={20} />,
      href: "/user-dashboard/documents",
    },
    {
      id: "contact-support",
      title: "Contact Support",
      description: "Get help from our team",
      icon: <MessageCircle size={20} />,
      href: "/user-dashboard/support",
    },
  ];

  const recentApplications: Application[] = [
    {
      id: "APP-2024-001",
      title: "I-130 Petition for Alien Relative",
      type: "Family Petition",
      status: "pending",
      submittedDate: "2024-09-15",
      progress: 45,
    },
    {
      id: "APP-2024-002", 
      title: "N-400 Application for Naturalization",
      type: "Citizenship",
      status: "approved",
      submittedDate: "2024-08-20",
      progress: 100,
    },
    {
      id: "APP-2024-003",
      title: "I-765 Application for Employment Authorization",
      type: "Work Authorization",
      status: "submitted",
      submittedDate: "2024-09-22",
      progress: 15,
    },
    {
      id: "APP-2024-004",
      title: "I-485 Application to Adjust Status",
      type: "Green Card",
      status: "rejected",
      submittedDate: "2024-09-10",
      progress: 30,
    },
  ];

  const handleQuickActionClick = (actionId: string) => {
    console.log("Quick action clicked:", actionId);
  };

  const handleApplicationClick = (applicationId: string) => {
    console.log("Application clicked:", applicationId);
  };

  const handleViewAllApplications = () => {
    console.log("View all applications clicked");
  };

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
              // {
              //   icon: <Clock size={20} />,
              //   text: "Pending Requests",
              //   href: "/user-dashboard/pending",
              // },
              // {
              //   icon: <CheckCircle size={20} />,
              //   text: "Approved Requests",
              //   href: "/user-dashboard/approved",
              // },
              // {
              //   icon: <XCircle size={20} />,
              //   text: "Rejected Requests",
              //   href: "/user-dashboard/rejected",
              // },
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
              // {
              //   icon: <FileSignature size={20} />,
              //   text: "Application Forms",
              //   href: "/user-dashboard/forms",
              // },
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
          <WelcomeSection
            userName="John"
            onNewApplicationClick={() => handleQuickActionClick('new-application')}
          />
          <StatsSection stats={dashboardStats} />
          <QuickActionsSection
            quickActions={quickActions}
            onQuickActionClick={handleQuickActionClick}
          />
          <RecentApplicationsSection
            applications={recentApplications}
            onApplicationClick={handleApplicationClick}
            onViewAllApplications={handleViewAllApplications}
          />
          <ImmigrationServicesSection onServiceClick={handleQuickActionClick} />
          <UpdatesSection />
        </DashboardContainer>
      </MainContent>
    </DashboardRoot>
  );
};