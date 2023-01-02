import React, { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useController, Control } from 'react-hook-form';
import { DateTime } from 'luxon';

import { Modal } from '@components/Modal';
import { Button } from '@components/Button';

import {
  Container,
  Label,
  InputButton,
  Title,
} from './styles';

export interface InputDateTimeProps {
  name: string
  label: string;
  control: Control<any>;
  mode: 'date' | 'time';
}

interface Props extends InputDateTimeProps {}

export function InputDateTimeForm({ name, control, mode, label }: Props) {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  const { field } = useController({
    name,
    control
  });

  function handleShow() {
    setShow(true);
  }

  function handleConfirmSelected() {
    setShow(false);
  }

  function onChange(event: DateTimePickerEvent, date?: Date | undefined) {
    setShow(Platform.OS === 'ios');

    const currentDate = date ? new Date(date) : new Date();
    const dateTextFormatted = mode === 'date' ? (
      DateTime.fromJSDate(currentDate).toFormat('D', { locale: 'pt-BR' })
    ) : (
      DateTime.fromJSDate(currentDate).toFormat('T', { locale: 'pt-BR' })
    )

    field.onChange(currentDate);
    setText(dateTextFormatted);
  }

  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputButton onPress={handleShow}>
        <Title>
          {text}
        </Title>
      </InputButton>

      {show && Platform.OS === 'android' && (
        <DateTimePicker
          mode={mode}
          display={Platform.OS === 'android'
            ? 'default'
            : 'spinner'
          }
          locale="pt-BR"
          textColor="black"
          is24Hour={true}
          value={field.value ?? new Date()}
          onChange={onChange}
        />
      )}

      <Modal
        visible={show && Platform.OS === 'ios'}
      >
        {show && (
          <DateTimePicker
            mode={mode}
            display={Platform.OS === 'android'
              ? 'default'
              : 'spinner'
            }
            locale="pt-BR"
            textColor="black"
            is24Hour={true}
            value={field.value ?? new Date()}
            onChange={onChange}
          />
        )}

        <Button
          title="Confirmar"
          style={{ marginTop: 24 }}
          onPress={handleConfirmSelected}
        />
      </Modal>

    </Container>
  );
}
