import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Textarea, TextareaProps } from '../Textarea';

interface Props extends TextareaProps {
  name: string;
  control: Control<any>;
}

export function TextareaForm({ name, control,...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Textarea
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
}
