import React, { FC, useCallback, useState } from 'react';
import { Label } from '~/components/Label';
import { Error, InputContentError, InputRootContent, InputRootIcon, InputRootInputContent, Root } from './style';
import { Props } from '~/@types/components/input-root';

export const InputRoot: FC<Props> = ({
  children,
  className,
  disabled,
  errorDescription,
  hasError = false,
  type,
  label,
  icon,
  changeIcon,
  onIconClick,
}) => {
  const [showIcon, setShowIcon] = useState(true);

  const handleIconClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      if (onIconClick) {
        onIconClick(event);
      }
      setShowIcon((prevShowIcon) => !prevShowIcon);
    },
    [onIconClick],
  );

  return (
    <Root className={className}>
      {label && <Label hasError={hasError}>{label}</Label>}

      <InputRootContent>
        {hasError ? (
          <InputContentError disabled={disabled} type={type}>
            {children}

            {changeIcon ? (
              <InputRootIcon onClick={handleIconClick}>{showIcon ? icon : changeIcon}</InputRootIcon>
            ) : (
              <InputRootIcon>{icon}</InputRootIcon>
            )}
          </InputContentError>
        ) : (
          <InputRootInputContent disabled={disabled} type={type}>
            {children}

            {changeIcon ? (
              <InputRootIcon onClick={handleIconClick}>{showIcon ? icon : changeIcon}</InputRootIcon>
            ) : (
              <InputRootIcon>{icon}</InputRootIcon>
            )}
          </InputRootInputContent>
        )}

        {hasError && !!errorDescription?.length && <Error>{errorDescription}</Error>}
      </InputRootContent>
    </Root>
  );
};
