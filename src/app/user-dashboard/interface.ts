"use client";

import { ReactNode } from "react";

export interface DashboardProps {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  isMobile?: boolean;
}
export interface NavItem {
  icon: ReactNode;
  text: string;
  href: string;
  active?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  navSections: NavSection[];
  userName: string;
  userRole: string;
  userInitials: string;
  logoSrc: string;
  collapsible: boolean;
  navItems: NavItem[];
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

export interface HeaderProps {
  title: string;
  onMenuToggle: () => void;
  userName: string;
  userRole: string;
  userInitials: string;
  isSidebarOpen: boolean;
  isMobile: boolean;
  onSearch: (query: string) => void;
  notificationsList: Notification[];
  onNotificationClick: (notification: Notification) => void;
  onMarkAllAsRead: () => void;
  onLogout: () => void;
}