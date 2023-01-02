import { SnackStorageDTO } from "@storage/snack/SnackStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      feedback: {
        dietType: 'inside' | 'outside' | undefined;
      },
      detail: {
        snack: SnackStorageDTO;
      };
      edit: {
        snack: SnackStorageDTO;
      };
      statistics: {
        dietPercentage: number;
      }
    }
  }
}
