import React from 'react';
import { Platform } from 'react-native';

import { Button } from '@components/Button';

import { useAuth } from '@hooks/auth';

import LogoSvg from '@assets/logo.svg'
import GoogleSvg from '@assets/google.svg'
import AppleSvg from '@assets/apple.svg'

import {
  Container,
  Title,
  Subtitle,
  Description,
  IconContainer,
  TitleButton,
} from './styles';

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Container>
      <LogoSvg
        height={140}
        width={140}
      />

      <Title>
        Controle sua dieta de maneira simples e fácil
      </Title>

      <Subtitle>
        Veja como está o andamento de sua dieta a partir das refeições e veja sua evolução.
      </Subtitle>

      <Description>
        Para começar, faça seu login
      </Description>

      <Button
        outline
        onPress={handleSignInWithGoogle}
      >
        <IconContainer>
          <GoogleSvg />
        </IconContainer>

        <TitleButton>
          Entrar com Google
        </TitleButton>
      </Button>

      {Platform.OS === 'ios' && (
        <Button
          outline
          style={{ marginTop: 12 }}
          onPress={handleSignInWithApple}
        >
          <IconContainer>
            <AppleSvg />
          </IconContainer>

          <TitleButton>
            Entrar com Apple
          </TitleButton>
        </Button>
      )}
    </Container>
  );
}
