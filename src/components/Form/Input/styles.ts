import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export interface InputTypeStyleProps {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;

  padding-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const InputComponent = styled(TextInput)<InputTypeStyleProps>`
  margin-top: 4px;

  padding: 14px;

  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    
    border: 1px solid ${isFocused ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};
  `};
`;
