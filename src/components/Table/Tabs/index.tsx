import { FC } from 'react';
import { TabsProps } from '~/@types/components/tabs.ts';
import { TabBorderBottom, TabContainer, TabItem } from '~/components/Table/Tabs/style.ts';

export const Tabs: FC<TabsProps> = ({ tabsData, activeTab, onTabChange }) => {
  const handleChange = (key: string) => {
    if (onTabChange) {
      onTabChange(key);
    }
  };

  return (
    <TabContainer>
      {tabsData?.map((tab, index) => (
        <TabItem
          key={tab.key}
          isActive={tab.key === activeTab}
          onClick={() => handleChange(tab.key)}
          style={{ marginRight: index === tabsData.length - 1 ? 0 : '5px' }}
        >
          {tab.tab}
        </TabItem>
      ))}
      <TabBorderBottom isActive={activeTab !== undefined && activeTab !== null} />
    </TabContainer>
  );
};
