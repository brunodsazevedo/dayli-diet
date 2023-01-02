import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface ContainerProps {
  outline: boolean;
}

interface TextProps {
  outline: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;

  border-radius: 6px;

  background-color: ${({ theme, outline }) => (
    outline ? 'transparent' : theme.COLORS.GRAY_600
  )};

  ${({ theme, outline }) => outline && css`
    border: 1px solid ${theme.COLORS.GRAY_700};
  `};
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, outline }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${outline ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18,
}))`
  margin-right: 12px;
`;
