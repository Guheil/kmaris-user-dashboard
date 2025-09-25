"use client";

import { FC } from "react";
import { WelcomeSectionProps } from "./interface";
import { WelcomeCard, WelcomeContent, WelcomeTitle, WelcomeSubtitle } from "./elements";
import { Button } from "@mui/material";
import { PlusCircle } from "lucide-react";

export const WelcomeSection: FC<WelcomeSectionProps> = ({ userName, onNewApplicationClick }) => {
  return (
    <WelcomeCard>
      <WelcomeContent>
        <WelcomeTitle>Welcome back, {userName}!</WelcomeTitle>
        <WelcomeSubtitle>
          Here's an overview of your immigration applications and available services.
        </WelcomeSubtitle>
        <Button 
          variant="outlined" 
          sx={{ 
            color: 'white', 
            borderColor: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: 'white',
            }
          }}
          startIcon={<PlusCircle size={16} />}
          onClick={onNewApplicationClick}
        >
          Start New Application
        </Button>
      </WelcomeContent>
    </WelcomeCard>
  );
};