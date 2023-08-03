// components/OtherLayout.tsx
import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <> 
        <Sidebar/>
        <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
