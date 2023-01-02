import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'inside' | 'outside';

interface Props {
  isActive: boolean;
  type: ButtonTypeStyleProps;
}

interface IconProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, isActive, type }) => css`
    border: ${!isActive ? 'none' : (`
      1px solid ${type === 'inside' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `)};

    background-color: ${isActive && type === 'inside' ? (
      theme.COLORS.GREEN_LIGHT
    ) : isActive && type === 'outside' ? (
      theme.COLORS.RED_LIGHT
    ) : (
      theme.COLORS.GRAY_200
    )};
  `};
`;

export const Icon = styled.View<IconProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;

  margin-right: 8px;

  background-color: ${({ theme, type }) => (
    type === 'inside' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  )};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
