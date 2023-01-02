import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  ButtonTypeStyleProps,
  Container,
  Icon,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  type: ButtonTypeStyleProps;
  isActive?: boolean;
}

export function DietTypeButton({ title, type, isActive = false, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon type={type} />

      <Title>
        {title}
      </Title>
    </Container>
  );
}
