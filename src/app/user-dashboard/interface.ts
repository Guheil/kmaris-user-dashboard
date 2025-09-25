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

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

export interface DashboardStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  totalApplicationsChange?: number;
  pendingApplicationsChange?: number;
  approvedApplicationsChange?: number;
  rejectedApplicationsChange?: number;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color?: string;
}

export interface Application {
  id: string;
  title: string;
  type: string;
  status: "pending" | "approved" | "rejected" | "submitted";
  submittedDate: string;
  progress?: number;
  estimatedCompletion?: string;
}