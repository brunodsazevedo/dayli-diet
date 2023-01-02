import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_LOGGED } from '../storageConfig';
import { UserStorageDTO } from "./UserStorageDTO";

export async function userCreateSession(data: UserStorageDTO) {
  try {
    const userLogged = JSON.stringify(data);

    await AsyncStorage.setItem(USER_LOGGED, userLogged);
  } catch (error) {
    throw error;
  }
}