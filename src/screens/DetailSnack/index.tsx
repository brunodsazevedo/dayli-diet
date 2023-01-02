import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DateTime } from 'luxon';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

import { useAuth } from '@hooks/auth';

import { SnackStorageDTO } from '@storage/snack/SnackStorageDTO';
import { snackDeleteByUser } from '@storage/snack/snackDeleteByUser';

import {
  Container,
  Content,
  Title,
  Description,
  Subtitle,
  TypeContainer,
  Icon,
  TypeText,
  Footer,
  EditIcon,
  TitleButtonPrimary,
  TrashIcon,
  TitleButtonSecondary,
  TextModal,
  FooterModal,
  ButtonModalContainer,
} from './styles';

interface RouteParams {
  snack: SnackStorageDTO;
}

export function DetailSnack() {
  const [isShow, setIsShow] = useState(false);

  const route = useRoute();
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const { snack } = route.params as RouteParams;

  const dateFormatted = DateTime.fromISO(snack.date).toFormat('D', { locale: 'pt-BR' });

  function handleConfirmDeleteSnack() {
    setIsShow(true);
  }

  function handleEditSnack() {
    navigate('edit', { snack });
  }

  async function handleDeleteSnack() {
    try {
      setIsShow(false);

      await snackDeleteByUser(snack.id, user.id);

      navigate('home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container type={snack.type}>
      <Header title="Refeição" />

      <Content>
        <Title>
          {snack.name}
        </Title>

        <Description>
          {snack.description}
        </Description>

        <Subtitle>
          Data e hora
        </Subtitle>

        <Description>
          {`${dateFormatted} às ${snack.schedule}`}
        </Description>

        <TypeContainer>
          <Icon type={snack.type} />

          <TypeText>
            {snack.type === 'inside' ? 'dentro da dieta' : 'fora da dieta'}
          </TypeText>
        </TypeContainer>
      </Content>

      <Footer>
        <Button onPress={handleEditSnack}>
          <EditIcon />

          <TitleButtonPrimary>
            Editar refeição
          </TitleButtonPrimary>
        </Button>

        <Button
          outline
          style={{ marginTop: 8 }}
          onPress={handleConfirmDeleteSnack}
        >
          <TrashIcon />

          <TitleButtonSecondary>
            Excluir refeição
          </TitleButtonSecondary>
        </Button>
      </Footer>

      <Modal
        visible={isShow}
      >
        <TextModal>
          Deseja realmente excluir o registro da refeição?
        </TextModal>

        <FooterModal>
          <ButtonModalContainer>
            <Button
              title="Cancelar"
              outline
              onPress={() => setIsShow(false)}
            />
          </ButtonModalContainer>

          <ButtonModalContainer>
            <Button
              title="Sim, excluir"
              onPress={handleDeleteSnack}
            />
          </ButtonModalContainer>
        </FooterModal>
      </Modal>
    </Container>
  );
}
