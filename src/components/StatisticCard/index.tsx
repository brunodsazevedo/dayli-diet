import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  IconContainer,
  Icon,
  Content,
  PercentageText,
  Details,
} from './styles';

interface Props extends TouchableOpacityProps {
  value: number;
}

export function StatisticCard({ value, ...rest }: Props) {
  const typeDiet = value > 58 ? 'inside' : 'outside';

  return (
    <Container
      type={typeDiet}
      {...rest}
    >
      <IconContainer>
        <Icon type={typeDiet} />
      </IconContainer>

      <Content>
        <PercentageText>
          {value.toFixed(2)}%
        </PercentageText>

        <Details>
          das refeições dentro da dieta
        </Details>
      </Content>
    </Container>
  );
}
