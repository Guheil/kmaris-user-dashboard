"use client";

import { FC, useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Header } from "@/components/header/Header";
import { DashboardProps, DashboardStats, QuickAction, Application, ServiceProgress } from "./interface";
import {
  DashboardRoot,
  MainContent,
  DashboardContainer,
  WelcomeCard,
  WelcomeContent,
  WelcomeTitle,
  WelcomeSubtitle,
  StatsGrid,
  StatsCard,
  StatsHeader,
  StatsIconWrapper,
  StatsNumber,
  StatsLabel,
  StatsChange,
  QuickActionsContainer,
  SectionTitle,
  QuickActionsGrid,
  QuickActionCard,
  QuickActionIcon,
  QuickActionTitle,
  QuickActionDesc,
  RecentApplicationsContainer,
  ApplicationsTable,
  ApplicationsTableHeader,
  ApplicationRow,
  ApplicationInfo,
  ApplicationTitle,
  ApplicationId,
  StatusBadge,
  DateText,
  ViewAllButton,
  UpdatesSection,
  UpdatesContainer,
  UpdateItem,
  UpdateHeader,
  UpdateIconWrapper,
  UpdateContent,
  UpdateTitle,
  UpdateDescription,
  UpdateMeta,
  UpdateTimestamp,
  UpdateAction,
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
  PlusCircle,
  Calendar,
  Download,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Eye,
  NotebookTabs,
  Briefcase,
  Users,
  FileCheck,
  Bell,
  Upload,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { Button, Typography, Box, IconButton } from "@mui/material";

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

  // Dashboard Stats Data
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

  // Quick Actions Data
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

  // Recent Applications Data
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

  // Service Progress Data
  const serviceProgress: ServiceProgress[] = [
    {
      id: "progress-1",
      serviceName: "I-130 Family Petition",
      progress: 45,
      currentStep: "USCIS Review",
      totalSteps: 6,
      estimatedCompletion: "2024-12-15",
      nextAction: "Wait for USCIS decision",
    },
    {
      id: "progress-2",
      serviceName: "I-485 Adjustment of Status",
      progress: 60,
      currentStep: "Interview Scheduled",
      totalSteps: 8,
      estimatedCompletion: "2024-11-30",
      nextAction: "Prepare for interview",
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
          {/* Welcome Section */}
          <WelcomeCard>
            <WelcomeContent>
              <WelcomeTitle>Welcome back, John!</WelcomeTitle>
              <WelcomeSubtitle>
                Here's an overview of your immigration applications and available services.
              </WelcomeSubtitle>
              <Button 
                variant="outlined" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderColor: 'white',
                  }
                }}
                startIcon={<PlusCircle size={16} />}
                onClick={() => handleQuickActionClick('new-application')}
              >
                Start New Application
              </Button>
            </WelcomeContent>
          </WelcomeCard>

          {/* Stats Grid */}
          <StatsGrid>
            <StatsCard>
              <StatsHeader>
                <Box>
                  <StatsNumber>{dashboardStats.totalApplications}</StatsNumber>
                  <StatsLabel>Total Applications</StatsLabel>
                </Box>
                <StatsIconWrapper statusType="total">
                  <ClipboardList size={24} />
                </StatsIconWrapper>
              </StatsHeader>
              {dashboardStats.totalApplicationsChange && (
                <StatsChange positive={dashboardStats.totalApplicationsChange > 0}>
                  {dashboardStats.totalApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(dashboardStats.totalApplicationsChange)} from last month
                </StatsChange>
              )}
            </StatsCard>

            <StatsCard>
              <StatsHeader>
                <Box>
                  <StatsNumber>{dashboardStats.pendingApplications}</StatsNumber>
                  <StatsLabel>Pending Applications</StatsLabel>
                </Box>
                <StatsIconWrapper statusType="pending">
                  <Clock size={24} />
                </StatsIconWrapper>
              </StatsHeader>
              {dashboardStats.pendingApplicationsChange !== undefined && (
                <StatsChange positive={dashboardStats.pendingApplicationsChange > 0}>
                  {dashboardStats.pendingApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(dashboardStats.pendingApplicationsChange)} from last month
                </StatsChange>
              )}
            </StatsCard>

            <StatsCard>
              <StatsHeader>
                <Box>
                  <StatsNumber>{dashboardStats.approvedApplications}</StatsNumber>
                  <StatsLabel>Approved Applications</StatsLabel>
                </Box>
                <StatsIconWrapper statusType="approved">
                  <CheckCircle size={24} />
                </StatsIconWrapper>
              </StatsHeader>
              {dashboardStats.approvedApplicationsChange && (
                <StatsChange positive={dashboardStats.approvedApplicationsChange > 0}>
                  {dashboardStats.approvedApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(dashboardStats.approvedApplicationsChange)} from last month
                </StatsChange>
              )}
            </StatsCard>

            <StatsCard>
              <StatsHeader>
                <Box>
                  <StatsNumber>{dashboardStats.rejectedApplications}</StatsNumber>
                  <StatsLabel>Rejected Applications</StatsLabel>
                </Box>
                <StatsIconWrapper statusType="rejected">
                  <XCircle size={24} />
                </StatsIconWrapper>
              </StatsHeader>
              {dashboardStats.rejectedApplicationsChange !== undefined && (
                <StatsChange positive={dashboardStats.rejectedApplicationsChange === 0}>
                  {dashboardStats.rejectedApplicationsChange === 0 ? "No change" : 
                   dashboardStats.rejectedApplicationsChange > 0 ? 
                   <><TrendingUp size={12} /> {dashboardStats.rejectedApplicationsChange} from last month</> :
                   <><TrendingDown size={12} /> {Math.abs(dashboardStats.rejectedApplicationsChange)} from last month</>
                  }
                </StatsChange>
              )}
            </StatsCard>
          </StatsGrid>

          {/* Quick Actions */}
          <QuickActionsContainer>
            <SectionTitle>Quick Actions</SectionTitle>
            <QuickActionsGrid>
              {quickActions.map((action) => (
                <QuickActionCard 
                  key={action.id} 
                  onClick={() => handleQuickActionClick(action.id)}
                >
                  <QuickActionIcon className="action-icon">
                    {action.icon}
                  </QuickActionIcon>
                  <QuickActionTitle>{action.title}</QuickActionTitle>
                  <QuickActionDesc>{action.description}</QuickActionDesc>
                </QuickActionCard>
              ))}
            </QuickActionsGrid>
          </QuickActionsContainer>

          {/* Important Updates & Announcements */}
          

          {/* Recent Applications */}
          <RecentApplicationsContainer>
            <ApplicationsTable>
              <ApplicationsTableHeader>
                <SectionTitle sx={{ mb: 0 }}>Recent Applications</SectionTitle>
                <ViewAllButton 
                  variant="outlined" 
                  onClick={handleViewAllApplications}
                  endIcon={<ArrowRight size={16} />}
                >
                  View All
                </ViewAllButton>
              </ApplicationsTableHeader>
              
              {recentApplications.map((application) => (
                <ApplicationRow key={application.id}>
                  <ApplicationInfo>
                    <ApplicationTitle>{application.title}</ApplicationTitle>
                    <ApplicationId>#{application.id}</ApplicationId>
                  </ApplicationInfo>
                  
                  <Typography variant="body2" color="textSecondary">
                    {application.type}
                  </Typography>
                  
                  <StatusBadge status={application.status}>
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </StatusBadge>
                  
                  <DateText>
                    {formatDate(application.submittedDate)}
                  </DateText>
                  
                  <IconButton 
                    size="small" 
                    onClick={() => handleApplicationClick(application.id)}
                    sx={{ 
                      color: 'primary.main',
                      '&:hover': { 
                        backgroundColor: 'primary.light' 
                      } 
                    }}
                  >
                    <Eye size={16} />
                  </IconButton>
                </ApplicationRow>
              ))}
            </ApplicationsTable>
          </RecentApplicationsContainer>

          {/* Available Services Quick Access */}
          <QuickActionsContainer>
            <SectionTitle>Immigration Services</SectionTitle>
            <QuickActionsGrid>
              <QuickActionCard onClick={() => handleQuickActionClick('family-petition')}>
                <QuickActionIcon className="action-icon">
                  <Users size={20} />
                </QuickActionIcon>
                <QuickActionTitle>Family Petitions</QuickActionTitle>
                <QuickActionDesc>I-130, I-129F, and other family-based applications</QuickActionDesc>
              </QuickActionCard>

              <QuickActionCard onClick={() => handleQuickActionClick('citizenship')}>
                <QuickActionIcon className="action-icon">
                  <NotebookTabs size={20} />
                </QuickActionIcon>
                <QuickActionTitle>Citizenship Services</QuickActionTitle>
                <QuickActionDesc>N-400, N-600, and naturalization applications</QuickActionDesc>
              </QuickActionCard>

              <QuickActionCard onClick={() => handleQuickActionClick('work-authorization')}>
                <QuickActionIcon className="action-icon">
                  <Briefcase size={20} />
                </QuickActionIcon>
                <QuickActionTitle>Work Authorization</QuickActionTitle>
                <QuickActionDesc>I-765, H-1B, and employment-based applications</QuickActionDesc>
              </QuickActionCard>

              <QuickActionCard onClick={() => handleQuickActionClick('green-card')}>
                <QuickActionIcon className="action-icon">
                  <FileCheck size={20} />
                </QuickActionIcon>
                <QuickActionTitle>Green Card Services</QuickActionTitle>
                <QuickActionDesc>I-485, I-751, and permanent residence applications</QuickActionDesc>
              </QuickActionCard>
            </QuickActionsGrid>
          </QuickActionsContainer>
          <UpdatesSection>
            <SectionTitle>Important Updates & Announcements</SectionTitle>
            <UpdatesContainer>
              <UpdateItem>
                <UpdateHeader>
                  <UpdateIconWrapper>
                    <Clock3 size={24} />
                  </UpdateIconWrapper>
                  <UpdateContent>
                    <UpdateTitle>USCIS Processing Time Updates</UpdateTitle>
                    <UpdateDescription>
                      Current processing times for popular forms have been updated. I-130 family petitions are now taking 12-15 months, while I-485 adjustment applications are processing in 8-12 months. We recommend checking your case status regularly and preparing additional documentation if requested.
                    </UpdateDescription>
                    <UpdateMeta>
                      <UpdateTimestamp>
                        <Clock size={14} />
                        Updated 3 days ago
                      </UpdateTimestamp>
                      <UpdateAction variant="outlined">
                        View Full Update
                      </UpdateAction>
                    </UpdateMeta>
                  </UpdateContent>
                </UpdateHeader>
              </UpdateItem>

              <UpdateItem>
                <UpdateHeader>
                  <UpdateIconWrapper>
                    <Upload size={24} />
                  </UpdateIconWrapper>
                  <UpdateContent>
                    <UpdateTitle>New Document Upload Portal</UpdateTitle>
                    <UpdateDescription>
                      We've launched a new secure document upload system that allows you to submit supporting documents directly through your dashboard. This streamlined process reduces processing time and provides real-time confirmation of document receipt.
                    </UpdateDescription>
                    <UpdateMeta>
                      <UpdateTimestamp>
                        <Clock size={14} />
                        Updated 1 week ago
                      </UpdateTimestamp>
                      <UpdateAction variant="outlined">
                        Try New Upload
                      </UpdateAction>
                    </UpdateMeta>
                  </UpdateContent>
                </UpdateHeader>
              </UpdateItem>

              <UpdateItem>
                <UpdateHeader>
                  <UpdateIconWrapper>
                    <CalendarDays size={24} />
                  </UpdateIconWrapper>
                  <UpdateContent>
                    <UpdateTitle>Upcoming Holiday Schedule</UpdateTitle>
                    <UpdateDescription>
                      Our office will have modified hours during the upcoming holiday season from December 23rd through January 2nd. Regular consultations will resume on January 3rd, but emergency consultations remain available via phone during this period.
                    </UpdateDescription>
                    <UpdateMeta>
                      <UpdateTimestamp>
                        <Clock size={14} />
                        Updated 2 weeks ago
                      </UpdateTimestamp>
                      <UpdateAction variant="outlined">
                        View Schedule
                      </UpdateAction>
                    </UpdateMeta>
                  </UpdateContent>
                </UpdateHeader>
              </UpdateItem>
            </UpdatesContainer>
          </UpdatesSection>
        </DashboardContainer>
      </MainContent>
    </DashboardRoot>
  );
};