'use client';

import { useState } from 'react';
import { UserDashboard } from './UserDashboard';

export default function UserDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <UserDashboard
      sidebarOpen={sidebarOpen} 
      onSidebarToggle={handleSidebarToggle}
    />
  );
}