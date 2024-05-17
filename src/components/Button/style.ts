import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
    font-size: ${({ theme }) => theme.fontSizes[2]};
    display: flex;
    padding: ${({ theme }) => theme.space[3]};
    font-weight: ${({ theme }) => theme.weight[5]};
    border: none;
    cursor: pointer;

    &.ui-button--primary {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.text};
        border-radius: ${({ theme }) => theme.radius[1]};
        box-shadow: ${({ theme }) => theme.shadows[1]};


        &:hover {
            background: ${({ theme }) => theme.colors.blueHover};
        }
    }

    &.ui-button--secondary {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.opacity500};
        border-radius: ${({ theme }) => theme.radius[2]};
        box-shadow: ${({ theme }) => theme.shadows[1]};
    }
    &.ui-button--terciary {
        background: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.gray200};
        border-radius: ${({ theme }) => theme.radius[2]};
        box-shadow: ${({ theme }) => theme.shadows[1]};
    }
    

    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.gray100};
    }

    &:disabled {
        &:disabled {
            background: ${({ theme }) => theme.colors.gray200};
            border-color: ${({ theme }) => theme.colors.gray500};
            cursor: not-allowed;
            color: ${({ theme }) => theme.colors.opacity500};
        }
`;
