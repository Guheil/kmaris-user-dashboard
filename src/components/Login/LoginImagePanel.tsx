"use client";

import React from "react";
import {
  Panel,
  BackgroundImage,
  Overlay,
  Content,
  TitleSecondary,
  Text,
  FeatureList,
  FeatureItem,
} from "./elements";

export function LoginImagePanel() {
  return (
    <Panel>
      <BackgroundImage src="/asylum.webp" alt="Background" fill />
      <Overlay />
      <Content>
        <TitleSecondary>Professional Immigration Services</TitleSecondary>
        <Text>Trust our expertise to guide you through your immigration journey with confidence and success</Text>
        
        <FeatureList>
          <FeatureItem>Expert immigration consultations</FeatureItem>
          <FeatureItem>Visa and green card applications</FeatureItem>
          <FeatureItem>Document preparation assistance</FeatureItem>
          <FeatureItem>Real-time case status tracking</FeatureItem>
          <FeatureItem>Personalized legal guidance</FeatureItem>
          <FeatureItem>Multilingual support available</FeatureItem>
        </FeatureList>
      </Content>
    </Panel>
  );
}