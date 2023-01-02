import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface StatusProps {
  type: 'inside' | 'outside' | undefined;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;

  margin-bottom: 8px;

  padding: 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Divisor = styled.View`
  height: 14px;
  width: 1px;

  margin: 0 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;

  padding-right: 42px;
`;

export const SnackText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Status = styled.View<StatusProps>`
  height: 14px;
  width: 14px;

  border-radius: 7px;

  background-color: ${({ theme, type }) => (
    type === 'inside' ? theme.COLORS.GREEN : theme.COLORS.RED
  )};
`;
