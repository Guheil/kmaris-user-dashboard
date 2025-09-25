"use client";

import { styled } from "@mui/material/styles";
import { Card, Box, Typography, Button, Paper, LinearProgress } from "@mui/material";

export const DashboardRoot = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[50],
  position: "relative",
}));

export const MainContent = styled("main")<{ sidebarOpen: boolean; isMobile: boolean }>(
  ({ theme, sidebarOpen, isMobile }) => ({
    flex: 1,
    padding: "84px 10px 20px", 
    marginLeft: isMobile ? 0 : sidebarOpen ? "280px" : "80px", 
    transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    minWidth: 0,
    
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      padding: "72px 16px 16px", 
    },
  })
);

export const DashboardContainer = styled(Box)(({ theme }) => ({
  padding: "24px",
  backgroundColor: theme.palette.grey[50],
  minHeight: "100vh",
}));

// Welcome Section
export const WelcomeCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrast,
  padding: "32px",
  marginBottom: "32px",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "200px",
    background: `radial-gradient(circle, ${theme.palette.primary.light}40 0%, transparent 70%)`,
    borderRadius: "50%",
  }
}));

export const WelcomeContent = styled(Box)({
  position: "relative",
  zIndex: 1,
});

export const WelcomeTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  marginBottom: "8px",
  color: theme.palette.primary.contrast,
}));

export const WelcomeSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  opacity: 0.9,
  marginBottom: "24px",
  color: theme.palette.primary.contrast,
}));

// Stats Cards
export const StatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
  marginBottom: "32px",
  
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
}));

export const StatsCard = styled(Card)(({ theme }) => ({
  padding: "24px",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.border.light}`,
  background: theme.palette.common.white,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    borderColor: theme.palette.primary.light,
  },
}));

export const StatsHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const StatsIconWrapper = styled(Box)<{ statusType: "pending" | "approved" | "rejected" | "total" }>(
  ({ theme, statusType }) => {
    const getBackgroundColor = () => {
      switch (statusType) {
        case "pending":
          return theme.palette.warning.light;
        case "approved":
          return theme.palette.success.light;
        case "rejected":
          return theme.palette.error.light;
        default:
          return theme.palette.info.light;
      }
    };

    const getIconColor = () => {
      switch (statusType) {
        case "pending":
          return theme.palette.warning.main;
        case "approved":
          return theme.palette.success.main;
        case "rejected":
          return theme.palette.error.main;
        default:
          return theme.palette.info.main;
      }
    };

    return {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: getBackgroundColor(),
      color: getIconColor(),
    };
  }
);

export const StatsNumber = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: "4px",
}));

export const StatsLabel = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.light,
  fontWeight: 500,
}));

export const StatsChange = styled(Typography)<{ positive?: boolean }>(({ theme, positive }) => ({
  fontSize: "12px",
  fontWeight: 600,
  color: positive ? theme.palette.success.main : theme.palette.error.main,
  display: "flex",
  alignItems: "center",
  gap: "4px",
}));

// Quick Actions Section
export const QuickActionsContainer = styled(Box)(({ theme }) => ({
  marginBottom: "32px",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "16px",
}));

export const QuickActionsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
  
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const QuickActionCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.border.light}`,
  background: theme.palette.common.white,
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    borderColor: theme.palette.primary.main,
    "& .action-icon": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrast,
    },
  },
}));

export const QuickActionIcon = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.light,
  marginBottom: "12px",
  transition: "all 0.3s ease",
}));

export const QuickActionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "4px",
}));

export const QuickActionDesc = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.light,
}));

// Recent Applications Section
export const RecentApplicationsContainer = styled(Box)({
  marginBottom: "32px",
});

export const ApplicationsTable = styled(Paper)(({ theme }) => ({
  borderRadius: "12px",
  border: `1px solid ${theme.palette.border.light}`,
  overflow: "hidden",
}));

export const ApplicationsTableHeader = styled(Box)(({ theme }) => ({
  padding: "20px 24px",
  backgroundColor: theme.palette.grey[50],
  borderBottom: `1px solid ${theme.palette.border.light}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ApplicationRow = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  borderBottom: `1px solid ${theme.palette.border.light}`,
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr auto",
  alignItems: "center",
  gap: "16px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.grey[50],
  },
  "&:last-child": {
    borderBottom: "none",
  },
  
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "8px",
    padding: "16px",
  },
}));

export const ApplicationInfo = styled(Box)({});

export const ApplicationTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "4px",
}));

export const ApplicationId = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.light,
}));

export const StatusBadge = styled(Box)<{ status: "pending" | "approved" | "rejected" | "submitted" }>(
  ({ theme, status }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "pending":
          return {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          };
        case "approved":
          return {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          };
        case "rejected":
          return {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          };
        default:
          return {
            backgroundColor: theme.palette.info.light,
            color: theme.palette.info.main,
          };
      }
    };

    return {
      ...getStatusStyles(),
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      display: "inline-block",
    };
  }
);

export const DateText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.text.light,
}));

export const ViewAllButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
  },
}));

// Updates & Announcements Section
export const UpdatesSection = styled(Box)({
  marginBottom: "32px",
});

export const UpdatesContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.border.light}`,
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
}));

export const UpdateItem = styled(Box)(({ theme }) => ({
  padding: "28px 32px",
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  position: "relative",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.grey[200] || "rgba(0,0,0,0.005)",
  },
  "&:last-child": {
    borderBottom: "none",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "4px",
    backgroundColor: theme.palette.primary.main,
    opacity: 0.6,
  },
}));

export const UpdateHeader = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginBottom: "12px",
  gap: "16px",
});

export const UpdateIconWrapper = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  flexShrink: 0,
  marginRight: "16px",
}));

export const UpdateContent = styled(Box)({
  flex: 1,
});

export const UpdateTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "8px",
  lineHeight: 1.3,
}));

export const UpdateDescription = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: theme.palette.text.light,
  lineHeight: 1.5,
  marginBottom: "16px",
}));

export const UpdateMeta = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "16px",
  gap: "16px",
});

export const UpdateTimestamp = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.text.light,
  display: "flex",
  alignItems: "center",
  gap: "4px",
  opacity: 0.8,
}));

export const UpdateAction = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "none",
  color: theme.palette.primary.main,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.light}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
  },
}));