"use client";

import { FC } from "react";
import { UpdatesSectionProps } from "./interface";
import { UpdatesSectionRoot, UpdatesContainer, UpdateItem, UpdateHeader, UpdateIconWrapper, UpdateContent, UpdateTitle, UpdateDescription, UpdateMeta, UpdateTimestamp, UpdateAction } from "./elements";
import { Clock3, Upload, CalendarDays, Clock } from "lucide-react";
import { SectionTitle } from "../QuickActionsSection/elements";

export const UpdatesSection: FC<UpdatesSectionProps> = () => {
  const updates = [
    {
      id: "update-1",
      title: "USCIS Processing Time Updates",
      description: "Current processing times for popular forms have been updated. I-130 family petitions are now taking 12-15 months, while I-485 adjustment applications are processing in 8-12 months. We recommend checking your case status regularly and preparing additional documentation if requested.",
      timestamp: "Updated 3 days ago",
      icon: <Clock3 size={24} />,
      actionText: "View Full Update",
    },
    {
      id: "update-2",
      title: "New Document Upload Portal",
      description: "We've launched a new secure document upload system that allows you to submit supporting documents directly through your dashboard. This streamlined process reduces processing time and provides real-time confirmation of document receipt.",
      timestamp: "Updated 1 week ago",
      icon: <Upload size={24} />,
      actionText: "Try New Upload",
    },
    {
      id: "update-3",
      title: "Upcoming Holiday Schedule",
      description: "Our office will have modified hours during the upcoming holiday season from December 23rd through January 2nd. Regular consultations will resume on January 3rd, but emergency consultations remain available via phone during this period.",
      timestamp: "Updated 2 weeks ago",
      icon: <CalendarDays size={24} />,
      actionText: "View Schedule",
    },
  ];

  return (
    <UpdatesSectionRoot>
      <SectionTitle>Important Updates & Announcements</SectionTitle>
      <UpdatesContainer>
        {updates.map((update) => (
          <UpdateItem key={update.id}>
            <UpdateHeader>
              <UpdateIconWrapper>
                {update.icon}
              </UpdateIconWrapper>
              <UpdateContent>
                <UpdateTitle>{update.title}</UpdateTitle>
                <UpdateDescription>{update.description}</UpdateDescription>
                <UpdateMeta>
                  <UpdateTimestamp>
                    <Clock size={14} />
                    {update.timestamp}
                  </UpdateTimestamp>
                  <UpdateAction variant="outlined">
                    {update.actionText}
                  </UpdateAction>
                </UpdateMeta>
              </UpdateContent>
            </UpdateHeader>
          </UpdateItem>
        ))}
      </UpdatesContainer>
    </UpdatesSectionRoot>
  );
};