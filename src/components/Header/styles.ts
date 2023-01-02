import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;

  padding : ${getStatusBarHeight() + 24}px 24px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButtonContainer = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 24}px;
  left: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700}
  `};
`;
