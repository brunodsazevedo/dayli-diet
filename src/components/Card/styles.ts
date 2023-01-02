import styled, { css } from 'styled-components/native';

export type ColorsStyleProps = 'GREEN_LIGHT' | 'RED_LIGHT' | 'GRAY_200';

interface ContainerProps {
  color: ColorsStyleProps;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-bottom: 12px;

  padding: 18px;

  border-radius: 8px;

  background-color: ${({ theme, color }) => theme.COLORS[color]};
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;
