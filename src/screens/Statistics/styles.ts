import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface ContainerProps {
  type: 'inside' | 'outside';
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  
  background-color: ${({ theme, type }) => (
    type === 'inside' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  )};
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 24}px 24px 32px;
`;

export const HeaderContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const DescriptionHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Content = styled.View`
  flex: 1;

  padding: 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const RowCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardContainer = styled.View`
  width: 47%;
`;
