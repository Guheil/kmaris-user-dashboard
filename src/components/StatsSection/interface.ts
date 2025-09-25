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

export interface StatsSectionProps {
  stats: DashboardStats;
}