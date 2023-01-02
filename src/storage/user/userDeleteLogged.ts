import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_LOGGED } from '../storageConfig';

export async function userDeleteLogged() {
  try {
    await AsyncStorage.removeItem(USER_LOGGED);
  } catch (error) {
    throw error;
  }
}
