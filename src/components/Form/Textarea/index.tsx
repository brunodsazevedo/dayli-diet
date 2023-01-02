import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import {
  Container,
  Label,
  InputComponent,
} from './styles';

export interface TextareaProps extends TextInputProps {
  label: string;
}

interface Props extends TextareaProps {}

export function Textarea({ label, ...rest }: Props) {
  const [ isFocused, setIsFocused ] = useState(false);
  
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputComponent
        multiline={true}
        numberOfLines={5}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ textAlignVertical: 'top' }}
        {...rest}
      />
    </Container>
  );
}
