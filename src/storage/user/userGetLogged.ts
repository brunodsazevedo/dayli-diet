import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_LOGGED } from '../storageConfig';
import { UserStorageDTO } from "./UserStorageDTO";

export async function userGetLogged() {
  try {
    const storage = await AsyncStorage.getItem(USER_LOGGED);
    const userLogged: UserStorageDTO = storage ? JSON.parse(storage) : {};

    return userLogged;
  } catch (error) {
    throw error;
  }
}