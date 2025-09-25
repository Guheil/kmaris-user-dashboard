"use client";

import { FC } from "react";
import { ImmigrationServicesSectionProps } from "./interface";
import { QuickActionsContainer, SectionTitle, QuickActionsGrid, QuickActionCard, QuickActionIcon, QuickActionTitle, QuickActionDesc } from "./elements";
import { Users, NotebookTabs, Briefcase, FileCheck } from "lucide-react";

export const ImmigrationServicesSection: FC<ImmigrationServicesSectionProps> = ({ onServiceClick }) => {
  const services = [
    {
      id: "family-petition",
      title: "Family Petitions",
      description: "I-130, I-129F, and other family-based applications",
      icon: <Users size={20} />,
    },
    {
      id: "citizenship",
      title: "Citizenship Services",
      description: "N-400, N-600, and naturalization applications",
      icon: <NotebookTabs size={20} />,
    },
    {
      id: "work-authorization",
      title: "Work Authorization",
      description: "I-765, H-1B, and employment-based applications",
      icon: <Briefcase size={20} />,
    },
    {
      id: "green-card",
      title: "Green Card Services",
      description: "I-485, I-751, and permanent residence applications",
      icon: <FileCheck size={20} />,
    },
  ];

  return (
    <QuickActionsContainer>
      <SectionTitle>Immigration Services</SectionTitle>
      <QuickActionsGrid>
        {services.map((service) => (
          <QuickActionCard key={service.id} onClick={() => onServiceClick(service.id)}>
            <QuickActionIcon className="action-icon">
              {service.icon}
            </QuickActionIcon>
            <QuickActionTitle>{service.title}</QuickActionTitle>
            <QuickActionDesc>{service.description}</QuickActionDesc>
          </QuickActionCard>
        ))}
      </QuickActionsGrid>
    </QuickActionsContainer>
  );
};