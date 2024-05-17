import React, { ReactNode } from 'react';

export type ButtonColor = 'primary' | 'secondary' | 'terciary';

export interface Props {
  color?: ButtonColor;
  disabled?: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  loading?: boolean;
  type?: string;
  icon?: ReactNode;
  iconSize?: string;
}
