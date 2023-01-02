import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { SnackStorageDTO } from '@storage/snack/SnackStorageDTO';

import {
  Container,
  HourText,
  Divisor,
  TextContainer,
  SnackText,
  Status,
} from './styles';

interface Props extends TouchableOpacityProps {
  data: SnackStorageDTO
}

export function SnackItem({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <HourText>{data.schedule}</HourText>

      <Divisor />

      <TextContainer>
        <SnackText numberOfLines={1}>
          {data.name}
        </SnackText>
      </TextContainer>

      <Status type={data.type} />
    </Container>
  );
}
