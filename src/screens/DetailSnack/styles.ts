import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

interface ContainerProps {
  type: 'inside' | 'outside' | undefined;
}

interface IconProps {
  type: 'inside' | 'outside' | undefined;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  
  background-color: ${({ theme, type }) => (
    type === 'inside' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  )};
`;

export const Content = styled.View`
  flex: 1;

  padding: 42px 24px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Description = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Subtitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const TypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-width: 144px;
  max-width: 144px;

  padding: 8px;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
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

export const TypeText = styled.Text``;

export const Footer = styled.View`
  padding: 8px 24px ${getBottomSpace() + 24}px;
`;

export const TitleButtonPrimary = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const TitleButtonSecondary = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const TextModal = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const FooterModal = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;

export const ButtonModalContainer = styled.View`
  width: 48%;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 8px;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_700,
}))`
  margin-right: 8px;
`;
