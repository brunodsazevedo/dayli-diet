import React from 'react';
import { Input, InputProps } from '../Input';
import { Control, Controller } from 'react-hook-form';

interface Props extends InputProps {
  name: string;
  control: Control<any>;
}

export function InputForm({ name, control,...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Input
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
}
