"use client";

import React, { Suspense } from "react";
import { PageWrapper, Container } from "../../components/Steps/elements";
import { StepsImagePanel } from "../../components/Steps/StepsImagePanel";
import { StepsForm } from "../../components/Steps/StepsForm";
function GetStartedForm() {
  return (
    <PageWrapper>
      <Container>
        <StepsImagePanel />
        <StepsForm />
      </Container>
    </PageWrapper>
  );
}

// Export the page with Suspense
export default function GetStartedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetStartedForm />
    </Suspense>
  );
}
