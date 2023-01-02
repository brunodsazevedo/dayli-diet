import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus } from 'phosphor-react-native';

import LogoSvg from '@assets/logo.svg'

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 36px 24px;
`;

export const Logo = styled(LogoSvg).attrs({
  height: 37,
  width: 82,
})``;

export const UserImageContainer = styled.View`
  height: 40px;
  width: 40px;

  border-radius: 20px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};

  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.Image`
  height: 100%;
  width: 100%;

  border-radius: 20px;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 24px;
`;

export const Title = styled.Text`
  margin: 40px 0 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Date = styled.Text`
  margin: 36px 0 12px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Icon = styled(Plus).attrs({
  size: 18,
})``;

export const TitleButton = styled.Text`
  margin-left: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const UserButton = styled.TouchableOpacity``;

export const ImageContainer = styled.View`
  height: 100px;
  width: 100px;

  border-radius: 50px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};

  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;

  border-radius: 50px;
`;

export const UserName = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const UserEmail = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;
