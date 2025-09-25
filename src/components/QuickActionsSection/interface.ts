import { ReactNode } from "react";

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color?: string;
}

export interface QuickActionsSectionProps {
  quickActions: QuickAction[];
  onQuickActionClick: (actionId: string) => void;
}