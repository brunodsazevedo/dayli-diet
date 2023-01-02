import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { AppError } from '@utils/AppError';

import { SNACK_COLLECTION } from '../storageConfig';
import { snacksGetByUser } from './snacksGetByUser';
import { SnackDTO } from './SnackStorageDTO';

export async function snackCreate(data: SnackDTO, user: string) {
  try {
    if(!data.name || data.name.trim().length === 0) {
      throw new AppError('Nome da refeição é obrigatório');
    }

    if(!data.description || data.description.trim().length === 0) {
      throw new AppError('Descrição da refeição é obrigatório');
    }

    if(!data.date || data.date.trim().length === 0) {
      throw new AppError('Data da refeição é obrigatório');
    }

    if(!data.schedule) {
      throw new AppError('Hora da refeição é obrigatório');
    }

    if(!data.type || data.type.trim().length === 0) {
      throw new AppError('Tipo da refeição é obrigatório');
    }

    let newData = {
      id: String(uuid.v4()),
      ...data,
    };

    const storedSnacks = await snacksGetByUser(user);
    const storage = JSON.stringify([newData, ...storedSnacks]);

    await AsyncStorage.setItem(`${SNACK_COLLECTION}-${user}`, storage);
  } catch (error) {
    throw error;
  }
}
