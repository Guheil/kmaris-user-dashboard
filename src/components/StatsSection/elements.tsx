"use client";

import { styled } from "@mui/material/styles";
import { Card, Box, Typography } from "@mui/material";

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