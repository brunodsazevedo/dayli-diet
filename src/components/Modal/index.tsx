import React, { ReactNode } from 'react';
import { Modal as ModalRN, ModalProps } from 'react-native';

import {
  Container,
  Content,
} from './styles';

interface Props extends ModalProps {
  children: ReactNode;
}

export function Modal({ children, ...rest }: Props) {
  return (
    <ModalRN
      animationType="fade"
      transparent
      {...rest}
    >
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </ModalRN>
  );
}
