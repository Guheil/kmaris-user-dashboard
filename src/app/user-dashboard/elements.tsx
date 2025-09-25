"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

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