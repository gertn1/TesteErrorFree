import { menuOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { menuItems } from './menuItems';
import { Icon, SidebarItem, SidebarMenuItems, Span } from './style';

interface SidebarProps {
  isOpen: boolean;
  onHamburgerClick?: () => void;
}

const SidebarContainer = styled.div<SidebarProps>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100%;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-right: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const HamburgerButton = styled.div`
  padding: ${({ theme }) => theme.space[2]};
  cursor: pointer;
`;

export const Sidebar = ({ isOpen, onHamburgerClick }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <HamburgerButton onClick={onHamburgerClick}>
        <Icon icon={menuOutline} />
      </HamburgerButton>
      {menuItems.map(({ url, label, icon }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url}>
            <Icon icon={icon} />
            <Span hidden={!isOpen}>{label}</Span>
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};
