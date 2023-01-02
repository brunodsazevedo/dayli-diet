import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/BackButton';

import {
  Container,
  BackButtonContainer,
  Title,
} from './styles';

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButtonContainer>
        <BackButton
          onPress={goBack}
        />
      </BackButtonContainer>

      <Title>
        {title}
      </Title>
    </Container>
  );
}
