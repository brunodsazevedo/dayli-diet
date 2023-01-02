import AsyncStorage from '@react-native-async-storage/async-storage';

import { SNACK_COLLECTION } from '../storageConfig';
import { SnackStorageDTO } from './SnackStorageDTO';

export async function snacksGetByUser(user: string) {
  try {
    const storage = await AsyncStorage.getItem(`${SNACK_COLLECTION}-${user}`);
    const snacks: SnackStorageDTO[] = storage ? JSON.parse(storage) : [];

    return snacks;
  } catch (error) {
    throw error;
  }
}
