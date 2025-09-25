"use client";

import { FC } from "react";
import { QuickActionsSectionProps } from "./interface";
import { QuickActionsContainer, SectionTitle, QuickActionsGrid, QuickActionCard, QuickActionIcon, QuickActionTitle, QuickActionDesc } from "./elements";

export const QuickActionsSection: FC<QuickActionsSectionProps> = ({ quickActions, onQuickActionClick }) => {
  return (
    <QuickActionsContainer>
      <SectionTitle>Quick Actions</SectionTitle>
      <QuickActionsGrid>
        {quickActions.map((action) => (
          <QuickActionCard 
            key={action.id} 
            onClick={() => onQuickActionClick(action.id)}
          >
            <QuickActionIcon className="action-icon">
              {action.icon}
            </QuickActionIcon>
            <QuickActionTitle>{action.title}</QuickActionTitle>
            <QuickActionDesc>{action.description}</QuickActionDesc>
          </QuickActionCard>
        ))}
      </QuickActionsGrid>
    </QuickActionsContainer>
  );
};