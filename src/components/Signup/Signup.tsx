"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { SignupProps } from "./interface";
import { PageWrapper, Container } from "./elements";
import { SignupForm } from "./SignupForm";
import { SignupImagePanel } from "./SignupImagePanel";

export function Signup({ onSubmit, onLogin }: SignupProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageWrapper>
      <Container>
        {!isMobile && <SignupImagePanel />}
        <SignupForm onSubmit={onSubmit} onLogin={onLogin} />
      </Container>
    </PageWrapper>
  );
}

export default Signup;