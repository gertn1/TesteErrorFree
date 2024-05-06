import { IconButton } from '~/components/Table/Pagination/style.ts';
import { IonIcon } from '@ionic/react';
import { FC } from 'react';

export const PaginationButton: FC<{ onClick: () => void; disabled: boolean; icon: any }> = ({
  onClick,
  disabled,
  icon,
}) => (
  <IconButton onClick={onClick} disabled={disabled}>
    <IonIcon icon={icon} />
  </IconButton>
);
