import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { DateTime } from 'luxon';

import { Header } from '@components/Header';
import { InputForm } from '@components/Form/InputForm';
import { TextareaForm } from '@components/Form/TextareaForm';
import { Button } from '@components/Button';
import { DietTypeButton } from '@components/Form/DietTypeButton';
import { Modal } from '@components/Modal';
import { InputDateTimeForm } from '@components/Form/InputDateTimeForm';

import { useAuth } from '@hooks/auth';

import { snackCreate } from '@storage/snack/snackCreate';

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

interface IForm {
  name: string;
  description: string;
  date: Date;
  schedule: Date;
}

export function NewSnack() {
  const [dietType, setDietType] = useState<'inside' | 'outside'>();
  const [messageModal, setMessageModal] = useState('');
  const [isShow, setIsShow] = useState(false);

  const { user } = useAuth();
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm<IForm>();

  function handleSelectDietType(type: 'inside' | 'outside') {
    setDietType(type);
  }

  async function handleAddNewSnack(data: IForm) {
    try {
      const dataFormatted = {
        ...data,
        date: data.date ? DateTime.fromJSDate(data.date).toISODate() : '',
        schedule: data.schedule ? DateTime.fromJSDate(data.schedule).toFormat('HH:mm') : '',
        type: dietType,
      };
      
      await snackCreate(dataFormatted, user.id);
      navigate('feedback', { dietType });
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
        <Header title="Nova refeição" />

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
                <InputDateTimeForm
                  name="date"
                  label="Data"
                  mode="date"
                  control={control}
                />
              </FormInputContainer>

              <FormInputContainer>
                <InputDateTimeForm
                  name="schedule"
                  label="Hora"
                  mode="time"
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
            title="Cadastrar refeição"
            onPress={handleSubmit(handleAddNewSnack)}
          />

        </Content>

        <Modal visible={isShow}>

          <TitleModal>Erro ao criar nova refeição</TitleModal>

          <Message>{messageModal}</Message>

          <FooterModal>
            <Button
              title="Fechar"
              onPress={() => setIsShow(false)}
            />
          </FooterModal>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
