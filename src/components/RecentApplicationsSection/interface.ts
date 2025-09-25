export interface Application {
  id: string;
  title: string;
  type: string;
  status: "pending" | "approved" | "rejected" | "submitted";
  submittedDate: string;
  progress?: number;
  estimatedCompletion?: string;
}

export interface RecentApplicationsSectionProps {
  applications: Application[];
  onApplicationClick: (applicationId: string) => void;
  onViewAllApplications: () => void;
}