import styled, { css } from 'styled-components/native';

import InsideIllustrationSvg from '@assets/diet-inside-illustration.svg'
import OutsideIllustrationSvg from '@assets/diet-outside-illustration.svg'

export type TypeStyleProps = 'inside' | 'outside';

interface TitleProps {
  type: TypeStyleProps;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<TitleProps>`
  margin-bottom: 8px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'inside' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const InsideIllustration = styled(InsideIllustrationSvg)`
  margin: 32px 0;
`;

export const OutsideIllustration = styled(OutsideIllustrationSvg)`
  margin: 32px 0;
`;

export const ButtonContainer = styled.View`
  width: 50%;
`;
