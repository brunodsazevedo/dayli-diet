import styled, { css } from 'styled-components/native';
import hexOpacity from 'hex-opacity';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${hexOpacity.create(theme.COLORS.GRAY_700, 0.4)};
  `};
`;

export const Content = styled.View`
  width: 327px;

  border-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
