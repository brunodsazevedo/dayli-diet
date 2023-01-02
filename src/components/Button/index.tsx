import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps {
  title?: string;
  outline?: boolean;
  children?: ReactNode;
}

export function Button({ title, outline = false, children, ...rest }: Props) {
  return (
    <Container
      outline={outline}
      {...rest}
    >
      {title && (
        <Title outline={outline}>
          {title}
        </Title>
      )}

      {children}
    </Container>
  );
}
