import React from 'react';

export interface TabProps {
  tab: React.ReactNode;
  key: string;
}

export interface TabsProps {
  tabsData?: TabProps[];
  activeTab?: string;
  onChange?: (key: string) => void;
  onTabChange?: (key: string) => void;
}
