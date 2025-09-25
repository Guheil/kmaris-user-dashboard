"use client";

import { FC } from "react";
import { StatsSectionProps } from "./interface";
import { StatsGrid, StatsCard, StatsHeader, StatsIconWrapper, StatsNumber, StatsLabel, StatsChange } from "./elements";
import { ClipboardList, Clock, CheckCircle, XCircle } from "lucide-react";
import { Box } from "@mui/material";
import { TrendingUp, TrendingDown } from "lucide-react";

export const StatsSection: FC<StatsSectionProps> = ({ stats }) => {
  return (
    <StatsGrid>
      <StatsCard>
        <StatsHeader>
          <Box>
            <StatsNumber>{stats.totalApplications}</StatsNumber>
            <StatsLabel>Total Applications</StatsLabel>
          </Box>
          <StatsIconWrapper statusType="total">
            <ClipboardList size={24} />
          </StatsIconWrapper>
        </StatsHeader>
        {stats.totalApplicationsChange && (
          <StatsChange positive={stats.totalApplicationsChange > 0}>
            {stats.totalApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(stats.totalApplicationsChange)} from last month
          </StatsChange>
        )}
      </StatsCard>

      <StatsCard>
        <StatsHeader>
          <Box>
            <StatsNumber>{stats.pendingApplications}</StatsNumber>
            <StatsLabel>Pending Applications</StatsLabel>
          </Box>
          <StatsIconWrapper statusType="pending">
            <Clock size={24} />
          </StatsIconWrapper>
        </StatsHeader>
        {stats.pendingApplicationsChange !== undefined && (
          <StatsChange positive={stats.pendingApplicationsChange > 0}>
            {stats.pendingApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(stats.pendingApplicationsChange)} from last month
          </StatsChange>
        )}
      </StatsCard>

      <StatsCard>
        <StatsHeader>
          <Box>
            <StatsNumber>{stats.approvedApplications}</StatsNumber>
            <StatsLabel>Approved Applications</StatsLabel>
          </Box>
          <StatsIconWrapper statusType="approved">
            <CheckCircle size={24} />
          </StatsIconWrapper>
        </StatsHeader>
        {stats.approvedApplicationsChange && (
          <StatsChange positive={stats.approvedApplicationsChange > 0}>
            {stats.approvedApplicationsChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(stats.approvedApplicationsChange)} from last month
          </StatsChange>
        )}
      </StatsCard>

      <StatsCard>
        <StatsHeader>
          <Box>
            <StatsNumber>{stats.rejectedApplications}</StatsNumber>
            <StatsLabel>Rejected Applications</StatsLabel>
          </Box>
          <StatsIconWrapper statusType="rejected">
            <XCircle size={24} />
          </StatsIconWrapper>
        </StatsHeader>
        {stats.rejectedApplicationsChange !== undefined && (
          <StatsChange positive={stats.rejectedApplicationsChange === 0}>
            {stats.rejectedApplicationsChange === 0 ? "No change" : 
             stats.rejectedApplicationsChange > 0 ? 
             <><TrendingUp size={12} /> {stats.rejectedApplicationsChange} from last month</> :
             <><TrendingDown size={12} /> {Math.abs(stats.rejectedApplicationsChange)} from last month</>
            }
          </StatsChange>
        )}
      </StatsCard>
    </StatsGrid>
  );
};