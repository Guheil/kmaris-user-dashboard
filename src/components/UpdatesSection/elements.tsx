"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const UpdatesSectionRoot = styled(Box)({
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
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: "16px",
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
  color: theme.palette.common.white,
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