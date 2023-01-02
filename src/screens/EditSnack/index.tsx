import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { DateTime } from 'luxon';

import { Header } from '@components/Header';
import { InputForm } from '@components/Form/InputForm';
import { TextareaForm } from '@components/Form/TextareaForm';
import { Button } from '@components/Button';
import { DietTypeButton } from '@components/Form/DietTypeButton';
import { Modal } from '@components/Modal';

import { useAuth } from '@hooks/auth';

import { SnackStorageDTO } from '@storage/snack/SnackStorageDTO';
import { snackUpdateByUser } from '@storage/snack/snackUpdateByUser';

import { AppError } from '@utils/AppError';

import {
  Container,
  Content,
  Form,
  Row,
  FormInputContainer,
  Label,
  TitleModal,
  Message,
  FooterModal,
} from './styles';

interface RouteParams {
  snack: SnackStorageDTO
}

interface IForm {
  name: string;
  description: string;
  date: string;
  schedule: string;
}

export function EditSnack() {
  const route = useRoute();
  const { snack } = route.params as RouteParams;

  const [dietType, setDietType] = useState<'inside' | 'outside' | undefined>(snack.type);
  const [isShow, setIsShow] = useState(false);
  const [messageModal, setMessageModal] = useState('');

  const { user } = useAuth();
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      name: snack.name,
      description: snack.description,
      date: DateTime.fromISO(snack.date).toFormat('D', { locale: 'pt-BR' }),
      schedule: snack.schedule,
    }
  });

  function handleSelectDietType(type: 'inside' | 'outside') {
    setDietType(type);
  }

  async function handleEditSnack(data: IForm) {
    try {
      const dataFormatted = {
        ...data,
        id: snack.id,
        date: data.date ? DateTime.fromFormat(data.date, 'dd/LL/y').toISODate() : '',
        type: dietType,
      };
      
      await snackUpdateByUser(dataFormatted, user.id);
      navigate('home');
    } catch (error) {
      if(error instanceof AppError) {
        setMessageModal(error.message);
        setIsShow(true);
        return;
      }

      setMessageModal('Ocorreu um erro inesperado! por favor, tente novamente');
      setIsShow(true);
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Editar refeição" />

        <Content>
          <Form>
            <InputForm
              name="name"
              label="Nome"
              control={control}
            />

            <TextareaForm
              name="description"
              label="Descrição"
              control={control}
            />

            <Row>
              <FormInputContainer>
                <InputForm
                  name="date"
                  label="Data"
                  control={control}
                />  
              </FormInputContainer>

              <FormInputContainer>
                <InputForm
                  name="schedule"
                  label="Hora"
                  control={control}
                />  
              </FormInputContainer>
            </Row>

            <Label>
              Está dentro da dieta?
            </Label>

            <Row style={{ marginTop: 16 }}>
              <FormInputContainer>
                <DietTypeButton
                  title="Sim"
                  type="inside"
                  isActive={dietType === 'inside'}
                  onPress={() => handleSelectDietType('inside')}
                />
              </FormInputContainer>

              <FormInputContainer>
                <DietTypeButton
                  title="Não"
                  type="outside"
                  isActive={dietType === 'outside'}
                  onPress={() => handleSelectDietType('outside')}
                />
              </FormInputContainer>
            </Row>
          </Form>

          <Button
            title="Salvar alterações"
            onPress={handleSubmit(handleEditSnack)}
          />

          <Modal visible={isShow}>
            <TitleModal>Erro ao editar refeição</TitleModal>

            <Message>{messageModal}</Message>

            <FooterModal>
              <Button
                title="Fechar"
                onPress={() => setIsShow(false)}
              />
            </FooterModal>
          </Modal>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
