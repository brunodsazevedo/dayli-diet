import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;
