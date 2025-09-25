"use client";

import { styled } from "@mui/material/styles";
import { Card, Box, Typography } from "@mui/material";

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