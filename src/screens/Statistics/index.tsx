import React, { useState, useCallback } from 'react';
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/BackButton';
import { Card } from '@components/Card';

import { snacksGetByUser } from '@storage/snack/snacksGetByUser';
import { SnackStorageDTO } from '@storage/snack/SnackStorageDTO';

import { getBestSequence } from '@utils/getBestSequence';

import {
  Container,
  Header,
  HeaderContent,
  TitleHeader,
  DescriptionHeader,
  Content,
  RowCard,
  CardContainer,
} from './styles';
import { useAuth } from '@hooks/auth';

interface RouteParams {
  dietPercentage: number;
}

export function Statistics() {
  const [snacks, setSnacks] = useState<SnackStorageDTO[]>([]);

  const route = useRoute();
  const { goBack } = useNavigation();
  const { user } = useAuth();

  const { dietPercentage } = route.params as RouteParams;

  const dietType = dietPercentage > 58 ? 'inside' : 'outside';
  const bestSequenceInsideDiet = getBestSequence(snacks);
  const totalByDiet = snacks.reduce((acc, current) => {
    if(current.type === 'inside') {
      acc.insideDiet = acc.insideDiet + 1;

      return acc;
    }

    acc.outsideDiet = acc.outsideDiet + 1;

    return acc;
  }, { insideDiet: 0, outsideDiet: 0 });

  async function fetchSnacks() {
    try {
      const data = await snacksGetByUser(user.id);            
      setSnacks(data);

    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchSnacks();
  }, []));

  return (
    <Container type={dietType}>
      <Header>
        <BackButton
          onPress={goBack}
        />

        <HeaderContent>
          <TitleHeader>
            {dietPercentage.toFixed(2)}%
          </TitleHeader>

          <DescriptionHeader>
            das refeições dentro da dieta
          </DescriptionHeader>
        </HeaderContent>
      </Header>

      <Content>
        <Card
          title={bestSequenceInsideDiet}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <Card
          title={snacks.length}
          subtitle="refeições registradas"
        />

        <RowCard>
          <CardContainer>
            <Card
              title={totalByDiet.insideDiet}
              subtitle="refeições dentro da dieta"
              color="GREEN_LIGHT"
            />  
          </CardContainer>

          <CardContainer>
            <Card
              title={totalByDiet.outsideDiet}
              subtitle="refeições fora da dieta"
              color="RED_LIGHT"
            />  
          </CardContainer>
        </RowCard>
      </Content>
    </Container>
  );
}
