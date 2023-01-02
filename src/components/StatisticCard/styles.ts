import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';

export type TypeCardStyleProps = 'inside' | 'outside';

interface ContainerProps {
  type: TypeCardStyleProps;
}

interface IconProps {
  type: TypeCardStyleProps;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  height: 102px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme, type }) => (
    type === 'inside' ? theme.COLORS.GREEN : theme.COLORS.RED
  )};
`;

export const IconContainer = styled.View`
  position: absolute;

  top: 10px;
  right: 10px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Details = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Icon = styled(ArrowUpRight).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'inside' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<IconProps>``;
