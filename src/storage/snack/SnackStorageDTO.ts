export interface SnackStorageDTO {
  id: string;
  name: string;
  description: string;
  date: string;
  schedule: string;
  type: 'inside' | 'outside' | undefined;
}

export interface SnackDTO {
  name: string;
  description: string;
  type: "inside" | "outside" | undefined;
  date: string;
  schedule: string;
}
