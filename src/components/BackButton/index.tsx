import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps {}

export function BackButton({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
}
