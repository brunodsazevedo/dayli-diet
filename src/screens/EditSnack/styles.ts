import styled, { css } from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  padding-top: ${getStatusBarHeight()}px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Content = styled.View`
  flex: 1;

  padding: 24px 24px ${getBottomSpace() + 24}px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Form = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FormInputContainer = styled.View`
  width: 46%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const TitleModal = styled.Text`
  margin-bottom: 16px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.RED_DARK};
  `};
`;

export const Message = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const FooterModal = styled.View`
  margin-top: 24px;

  width: 50%;
`;
