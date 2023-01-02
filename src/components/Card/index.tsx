import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  ColorsStyleProps,
} from './styles';

interface Props {
  title: string | number;
  subtitle: string;
  color?: ColorsStyleProps;
}

export function Card({ title, subtitle, color = 'GRAY_200' }: Props) {
  return (
    <Container color={color}>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}
