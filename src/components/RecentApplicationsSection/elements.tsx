"use client";

import { styled } from "@mui/material/styles";
import { Box, Paper, Typography, Button } from "@mui/material";

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