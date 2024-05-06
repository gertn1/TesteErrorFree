import styled from 'styled-components';

import LogoImg from '~/components/App/LogoImg/LogoImg.png';

export const TopoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.space[2]};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const Logo = styled.img`
  background-image: url(${LogoImg});
  width: 130px;
  height: ${({ theme }) => theme.space[10]};
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${({ theme }) => theme.space[2]};
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const OptionsContainer = styled.div<{ show: boolean }>`
  position: absolute;
  padding-top: ${({ theme }) => theme.space[2]};
  top: 100%;
  right: 0;
  transform: translateX(-4%);
  background-color: rgb(18, 25, 29);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  width: 250px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;
