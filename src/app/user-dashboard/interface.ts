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

// Dashboard Overview Interfaces
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
  lastUpdated?: string;
  progress?: number;
  estimatedCompletion?: string;
}

export interface ServiceProgress {
  id: string;
  serviceName: string;
  progress: number;
  currentStep: string;
  totalSteps: number;
  estimatedCompletion: string;
  nextAction?: string;
}

export interface DashboardOverviewProps {
  stats: DashboardStats;
  quickActions: QuickAction[];
  recentApplications: Application[];
  serviceProgress: ServiceProgress[];
  userName: string;
  onQuickActionClick: (actionId: string) => void;
  onApplicationClick: (applicationId: string) => void;
  onViewAllApplications: () => void;
}

// Immigration Service Types
export interface ImmigrationService {
  id: string;
  name: string;
  description: string;
  category: "visa" | "petition" | "citizenship" | "work_permit" | "other";
  processingTime: string;
  requirements: string[];
  fee: number;
  isAvailable: boolean;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea" | "file" | "checkbox";
  required: boolean;
  options?: string[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  placeholder?: string;
  helpText?: string;
}

export interface ApplicationForm {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  fields: FormField[];
  sections?: {
    title: string;
    fields: string[];
  }[];
}

// User Profile Interface
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  currentStatus?: string;
  profilePicture?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
  };
}