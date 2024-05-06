import { FC } from 'react';

import { LabelContainer } from './style';
import { Props } from "~/@types/components/label.ts";

export const Label: FC<Props> = ({ children, hasError, type, position }) => {
  const errorClassName = hasError ? 'error' : '';

  return (
    <LabelContainer position={position} type={type} className={errorClassName}>
      {children}
    </LabelContainer>
  );
};
