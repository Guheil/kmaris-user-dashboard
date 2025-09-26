"use client";

import React from "react";
import Image from "next/image";
import {
  Panel,
  BackgroundImage,
  Overlay,
  Content,
  // LogoSection,
  MainContent,
  TitleSecondary,
  Text,
  FeatureList,
  FeatureItem,
  FooterSection,
} from "./elements";

export function SignupImagePanel() {
  const handleGoToHomepage = () => {
    window.location.href = "https://kmarisimmigration.vercel.app/";
  };

  return (
    <Panel>
      <BackgroundImage src="/asylum.webp" alt="Immigration Services" fill priority />
      <Overlay />
      <Content>
        {/* <LogoSection>
          <Image
            src="/whitelogo.png"
            alt="KMARIS LLC"
            width={170}
            height={95}
            priority
            style={{ 
              cursor: "pointer", 
              objectFit: "contain",
              marginBottom: "20px"
            }}
            onClick={handleGoToHomepage}
          />
        </LogoSection> */}
        
        <MainContent>
          <TitleSecondary>Join KMARIS LLC</TitleSecondary>
          <Text>
            We provide comprehensive immigration services to help you navigate the complex immigration process with expertise and care.
          </Text>
          
          <FeatureList>
            <FeatureItem>Expert immigration consultants</FeatureItem>
            <FeatureItem>Personalized legal guidance</FeatureItem>
            <FeatureItem>Secure document handling</FeatureItem>
            <FeatureItem>Real-time status updates</FeatureItem>
            <FeatureItem>Affordable service packages</FeatureItem>
            <FeatureItem>Multilingual support team</FeatureItem>
          </FeatureList>
        </MainContent>
        
        <FooterSection>
          {/* Space for additional content if needed */}
        </FooterSection>
      </Content>
    </Panel>
  );
}