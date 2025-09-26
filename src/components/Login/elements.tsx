"use client";

import { styled } from "@mui/material/styles";
import { palette } from "@/theme/palette";
import Image from "next/image";

export const PageWrapper = styled("div")({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
  padding: "2rem",
  alignItems: "center",
  justifyContent: "center",
});

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  margin: "auto",
  maxWidth: "1440px",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor: theme.palette.common.white,

  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    height: "700px",
    maxHeight: "90vh",
  },
}));

export const Panel = styled("div")(({ theme }) => ({
  display: "none", // Hide on mobile

  
  [theme.breakpoints.up('md')]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  
    position: "relative",
    padding: "60px 40px",
    color: theme.palette.common.white,
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.90) 0%, rgba(30, 41, 59, 0.85) 100%)",
  },
}));

export const BackgroundImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

export const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(15, 23, 42, 0.90) 0%, rgba(30, 41, 59, 0.85) 100%)",
  zIndex: 1,
});

export const Content = styled("div")({
flex:1,
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
   maxWidth: "380px",
});

export const TitleSecondary = styled("h2")({
  fontSize: "32px",
  fontWeight: 700,
  textAlign: "left",
  marginBottom: "20px",
  letterSpacing: "-0.025em",
  lineHeight: 1.2,
});

export const Text = styled("p")({
  fontSize: "15px",
  lineHeight: 1.6,
  marginBottom: "40px",
  opacity: 0.95,
  // textAlign: "center",
});

export const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  textAlign: "left",
  width: "100%",
  maxWidth: "380px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const FeatureItem = styled("li")({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: 400,

  "&:before": {
    content: '"✓"',
    marginRight: "16px",
    color: "#ff0000ff",
    fontWeight: "bold",
    fontSize: "18px",
    flexShrink: 0,
  }
});

export const FormRoot = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "40px 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: theme.palette.common.white,
  position: "relative",

  [theme.breakpoints.up('md')]: {
    width: "90%",
    padding: "60px 50px",
  },
}));

export const BackToHomeLink = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "20px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  background: "none",
  border: "none",
  color: theme.palette.text.secondary,
  fontSize: "13px",
  fontWeight: 500,
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  textDecoration: "none",

  "&:hover": {
    color: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.04)",
  },

  "&::before": {
    content: '"←"',
    fontSize: "14px",
    fontWeight: "bold",
  },

  [theme.breakpoints.up('md')]: {
    left: "30px",
    top: "30px",
  },
}));

export const LogoContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "-12px",
  cursor: "pointer",
  paddingBottom: "8px",
  // borderBottom: "1px solid #f1f5f9",
});

export const Title = styled("h1")({
  fontSize: "28px",
  fontWeight: 700,
  color: palette.text.dark,
  textAlign: "center",
  marginBottom: "6px",
  marginTop: "20px",
  letterSpacing: "-0.025em",
});

export const Subtitle = styled("p")({
  fontSize: "15px",
  color: palette.text.primary,
  textAlign: "center",
  margin: "0 auto 32px",
  fontWeight: 400,
});

export const Form = styled("form")({
  width: "100%",
  maxWidth: "620px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const InputGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const Label = styled("label")({
  fontSize: "14px",
  fontWeight: 600,
  color: palette.primary.main,
  letterSpacing: "0.025em",
});

export const InputWrapper = styled("div")({
  position: "relative",
});

export const Input = styled("input")(({ theme }) => ({
  width: "100%",
  padding: "16px 48px 16px 16px",
  fontSize: 15,
  color: theme.palette.navy.main,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  backgroundColor: theme.palette.common.white,
  transition: "all 0.2s ease-in-out",

  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    boxShadow: `0 0 0 3px rgba(0,37,66,0.08)`,
  },

  "&::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 0.7,
  },
}));

export const PasswordIconButton = styled("button")(({ theme }) => ({
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: theme.palette.text.secondary,
  padding: "4px",
  borderRadius: "4px",
  transition: "color 0.2s ease",

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const ForgotPassword = styled("a")({
  fontSize: "14px",
  color: palette.primary.main,
  textAlign: "right",
  fontWeight: 500,
  textDecoration: "none",
  marginTop: "-8px",
  transition: "color 0.2s ease",

  "&:hover": {
    textDecoration: "underline",
    color: palette.primary.dark,
  },
});

export const Divider = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  color: theme.palette.text.secondary,
  fontSize: "14px",
  fontWeight: 500,
  margin: "8px 0",

  "&::before, &::after": {
    content: '""',
    flex: 1,
    height: 1,
    background: "linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)",
  },
}));

export const SubmitButton = styled("button")({
  width: "100%",
  padding: "16px",
  fontSize: "16px",
  fontWeight: 600,
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  border: "none",
  cursor: "pointer",
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  letterSpacing: "0.025em",

  "&:hover": {
    backgroundColor: palette.primary.dark,
    transform: "translateY(-1px)",
    boxShadow: "0 10px 25px rgba(0,37,66,0.15)",
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&:disabled": {
    backgroundColor: palette.primary.light,
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "none",
  },
});

export const SignUpButton = styled(SubmitButton)(({ theme }) => ({
  color: palette.primary.main,
  backgroundColor: "rgba(0, 37, 66, 0.04)",
  border: `1px solid ${theme.palette.divider}`,

  "&:hover": {
    color: palette.primary.main,
    borderColor: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.08)",
    boxShadow: "0 8px 25px rgba(0,37,66,0.1)",
  },
}));

export const GoBackButton = styled("button")(({ theme }) => ({
  width: "100%",
  padding: "14px",
  fontSize: "14px",
  fontWeight: 500,
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  borderRadius: "8px",
  marginTop: "16px",
  transition: "all 0.2s ease",

  "&:hover": {
    color: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.04)",
  },
}));

// Remove unused styled components
export const LogoSection = styled("div")({});
export const MainContent = styled("div")({});
export const FooterSection = styled("div")({});
