import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import {
  Container,
  Title,
  Message,
  InsideIllustration,
  OutsideIllustration,
  ButtonContainer,
} from './styles';

interface RouteParams {
  dietType: 'inside' | 'outside';
}

export function SnackFeedback() {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { dietType } = route.params as RouteParams;

  function handleGoHome() {
    navigate('home');
  }

  return (
    <Container>
      <Title type={dietType}>
        {dietType === 'inside' ? (
          'Continue assim!'
        ) : (
          'Que pena!'
        )}
      </Title>

      <Message>
        {dietType === 'inside' ? (
          'Você continua dentro da dieta. Muito bem!'
        ) : (
          'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
        )}
      </Message>

      {dietType === 'inside' ? (
        <InsideIllustration />
      ) : (
        <OutsideIllustration />
      )}

      <ButtonContainer>
        <Button
          title="Ir para a página inicial"
          onPress={handleGoHome}
        />
      </ButtonContainer>
    </Container>
  );
}
