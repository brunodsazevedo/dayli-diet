import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from '../storageConfig';
import { snacksGetByUser } from "./snacksGetByUser";

export async function snackDeleteByUser(snackId: string, user: string) {
  try {
    const storedSnacks = await snacksGetByUser(user);
    const snacks = storedSnacks.filter(item => item.id !== snackId);

    await AsyncStorage.setItem(`${SNACK_COLLECTION}-${user}`, JSON.stringify(snacks));
  } catch (error) {
    throw error;    
  }
}
