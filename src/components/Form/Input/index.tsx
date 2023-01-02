import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Label,
  InputComponent,
} from './styles';

export interface InputProps extends TextInputProps {
  label: string;
}

interface Props extends InputProps {}

export function Input({ label, ...rest }: Props) {
  const [ isFocused, setIsFocused ] = useState(false);
  
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputComponent
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
}
