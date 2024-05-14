import { menuOutline } from 'ionicons/icons';
import { useState } from 'react';
import { ProfileOptions } from '~/components/App/ProfileOptions';
import { Icon } from '../Sidebar/style';
import {
  HamburgerButton,
  Logo,
  OptionsContainer,
  ProfileContainer,
  ProfileImage,
  TopoContainer,
} from '~/components/App/Topo/style.ts';

export const Topo = ({ onHamburguerClick }: { onHamburguerClick: () => void }) => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <TopoContainer>
      <HamburgerButton onClick={onHamburguerClick}>
        <Icon icon={menuOutline} />
      </HamburgerButton>
      <Logo />
      <ProfileContainer>
        <ProfileImage onClick={toggleProfileOptions}></ProfileImage>
        <OptionsContainer show={showProfileOptions}>
          <ProfileOptions />
        </OptionsContainer>
      </ProfileContainer>
    </TopoContainer>

    ////////////// silmara pedro 
  );
};
