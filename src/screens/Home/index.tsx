import React, { useState, useCallback } from 'react';
import { SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { DateTime } from 'luxon';
import { useTheme } from 'styled-components/native';

import { StatisticCard } from '@components/StatisticCard';
import { Button } from '@components/Button';
import { SnackItem } from '@components/SnackItem';
import { ListEmpty } from '@components/ListEmpty';
import { Modal } from '@components/Modal';

import { useAuth } from '@hooks/auth'

import { SnackStorageDTO } from '@storage/snack/SnackStorageDTO';
import { snacksGetByUser } from '@storage/snack/snacksGetByUser';

import {
  Container,
  Header,
  Content,
  Logo,
  UserImageContainer,
  UserImage,
  Title,
  Date,
  Icon,
  TitleButton,
  UserButton,
  ImageContainer,
  Image,
  UserName,
  UserEmail,
} from './styles';

interface Snack {
  date: string;
  dateFormatted: string;
  data: SnackStorageDTO[];
}

export function Home() {
  const [snacks, setSnacks] = useState<SnackStorageDTO[]>([]);
  const [snacksFormatted, setSnacksFormatted] = useState<Snack[]>([]);
  const [isShow, setIsShow] = useState(false);

  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();
  const theme = useTheme();

  const totalSnacksInsideDiet = snacks.reduce((acc, current) => {
    if(current.type === 'inside') {
      return acc = acc + 1;
    }
    return acc;
  }, 0);
  
  const dietPercentage = snacks.length > 0 ? (((totalSnacksInsideDiet) / snacks.length) * 100) : 0;

  function handleNewAddSnack() {
    navigate('new');
  }

  function handleDetailSnack(snack: SnackStorageDTO) {
    navigate('detail', { snack });
  }

  function handleStatistics() {
    navigate('statistics', { dietPercentage })
  }

  async function fetchSnacks() {
    try {
      const data = await snacksGetByUser(user.id);
      
      let dataFormatted: Snack[] = [];

      data.map(item => {
        let isDateAlreadyExist = dataFormatted.find(snack => snack.date === item.date);

        if(!isDateAlreadyExist) {
          dataFormatted.push({
            date: item.date,
            dateFormatted: DateTime.fromISO(item.date).toFormat('dd.LL.y'),
            data: [item],
          });
        } else {
          dataFormatted.map(data => {
            if(data.date === isDateAlreadyExist?.date) {
              data.data.push(item);
            }
          });
        }
      });
      
      setSnacks(data);
      setSnacksFormatted(dataFormatted);
    } catch (error) {
      console.log(error);
    }
  }

  function handleShowModal() {
    setIsShow(true);
  }

  function handleSignOut() {
    setIsShow(false);
    signOut();
  }

  useFocusEffect(useCallback(() => {
    fetchSnacks();
  }, []));

  return (
    <Container>
      <Header>
        <Logo />

        <UserButton onPress={handleShowModal}>
          <UserImageContainer>
            <UserImage
              source={{ uri: user.photo }}
            />
          </UserImageContainer>
        </UserButton>
      </Header>

      <Content>
        <StatisticCard
          value={dietPercentage}
          onPress={handleStatistics}
        />

        <Title>
          Refeições
        </Title>

        <Button
          onPress={handleNewAddSnack}
        >
          <Icon color={theme.COLORS.WHITE} />

          <TitleButton>Nova refeição</TitleButton>
        </Button>

        <SectionList
          sections={snacksFormatted}
          keyExtractor={(item, index) => item.date + index}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Cadastre sua primeira refeição" />
          )}
          renderSectionHeader={({ section: { dateFormatted } }) => (
            <Date>
              {dateFormatted}
            </Date>
          )}
          renderItem={({ item }) => (
            <SnackItem
              data={item}
              onPress={() => handleDetailSnack(item)}
            />
          )}
          contentContainerStyle={[
            { paddingBottom: 90 },
            snacks.length === 0 && { flex: 1 }
          ]}
        />

        <Modal visible={isShow}>
          <ImageContainer>
            <Image
              source={{ uri: user.photo }}
            />
          </ImageContainer>

          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>

          <Button
            outline
            style={{ marginTop: 24 }}
            title="Sair"
            onPress={handleSignOut}
          />
        </Modal>
      </Content>
    </Container>
  );
}
