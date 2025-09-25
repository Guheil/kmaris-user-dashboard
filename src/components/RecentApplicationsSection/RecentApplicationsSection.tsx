"use client";

import { FC } from "react";
import { RecentApplicationsSectionProps } from "./interface";
import { RecentApplicationsContainer, ApplicationsTable, ApplicationsTableHeader, ApplicationRow, ApplicationInfo, ApplicationTitle, ApplicationId, StatusBadge, DateText, ViewAllButton } from "./elements";
import { Typography, IconButton } from "@mui/material";
import { ArrowRight, Eye } from "lucide-react";

export const RecentApplicationsSection: FC<RecentApplicationsSectionProps> = ({ applications, onApplicationClick, onViewAllApplications }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <RecentApplicationsContainer>
      <ApplicationsTable>
        <ApplicationsTableHeader>
          <Typography variant="h6" sx={{ mb: 0 }}>Recent Applications</Typography>
          <ViewAllButton 
            variant="outlined" 
            onClick={onViewAllApplications}
            endIcon={<ArrowRight size={16} />}
          >
            View All
          </ViewAllButton>
        </ApplicationsTableHeader>
        
        {applications.map((application) => (
          <ApplicationRow key={application.id}>
            <ApplicationInfo>
              <ApplicationTitle>{application.title}</ApplicationTitle>
              <ApplicationId>#{application.id}</ApplicationId>
            </ApplicationInfo>
            
            <Typography variant="body2" color="textSecondary">
              {application.type}
            </Typography>
            
            <StatusBadge status={application.status}>
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </StatusBadge>
            
            <DateText>
              {formatDate(application.submittedDate)}
            </DateText>
            
            <IconButton 
              size="small" 
              onClick={() => onApplicationClick(application.id)}
              sx={{ 
                color: 'primary.main',
                '&:hover': { 
                  backgroundColor: 'primary.light' 
                } 
              }}
            >
              <Eye size={16} />
            </IconButton>
          </ApplicationRow>
        ))}
      </ApplicationsTable>
    </RecentApplicationsContainer>
  );
};