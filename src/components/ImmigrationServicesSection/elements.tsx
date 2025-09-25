"use client";

import { styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";

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