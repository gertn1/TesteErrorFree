import { SyncOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { Props } from '~/@types/components/button.ts';
import { ButtonContainer } from './style';

export const Button: FC<Props> = ({ color, disabled, onClick, style, label, loading, icon, iconSize }) => {
  return (
    <>
      <ButtonContainer
        onClick={onClick}
        style={style}
        className={`ui-button ui-button--${color} ${loading ? 'ui-button--loading' : ''}`}
        disabled={disabled}
      >
        {loading ? <SyncOutlined spin style={{ fontSize: '16px' }} /> : null}
        {icon && <div style={{ fontSize: iconSize }}>{icon}</div>}
        {label}{' '}
      </ButtonContainer>
    </>
  );
};

export default Button;
